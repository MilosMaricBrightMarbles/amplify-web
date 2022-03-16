import { useAtomValue } from "jotai";
import flatMap from "lodash/flatMap";
import sum from "lodash/sum";
import uniq from "lodash/uniq";
import { useCallback, useMemo } from "react";

import { activeCategoryAtom, categoriesAtom } from "../util/atoms";
import { ConversationCategory, Term } from "../util/types";

const topTermsCount = 10;
export const useTopTerms = () => {
  const categories = useAtomValue(categoriesAtom);
  const activeCategory = useAtomValue(activeCategoryAtom);

  const name = useMemo(
    () => activeCategory?.name || "all categories",
    [activeCategory?.name]
  );

  const getSortedTerms = useCallback(
    (extract: (category: ConversationCategory) => Term[]) => {
      const allTerms = activeCategory
        ? extract(activeCategory)
        : flatMap(categories.map(extract));
      const allNames = uniq(allTerms.map((t) => t.name));
      const terms: Term[] = allNames.map((n) => ({
        name: n,
        count: sum(allTerms.filter((t) => t.name === n).map((t) => t.count)),
      }));

      return terms
        .sort((a, b) => (a.count > b.count ? -1 : 1))
        .slice(0, topTermsCount);
    },
    [activeCategory, categories]
  );

  const keywords = useMemo(
    () => getSortedTerms((c) => c.keywords),
    [getSortedTerms]
  );
  const hashtags = useMemo(
    () => getSortedTerms((c) => c.hashtags),
    [getSortedTerms]
  );

  return { name, keywords, hashtags };
};
