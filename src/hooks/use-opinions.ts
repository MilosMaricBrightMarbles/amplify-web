import { isAfter, parse } from "date-fns";
import format from "date-fns/format";
import { useAtomValue } from "jotai";
import flatMap from "lodash/flatMap";
import uniq from "lodash/uniq";
import { useMemo } from "react";

import { categoriesAtom } from "../util/atoms";
import { dateFormat } from "../util/constants";

const now = new Date();
export const useOpinions = () => {
  const categories = useAtomValue(categoriesAtom);

  const data = useMemo(() => {
    const perCategory = categories.map((c) =>
      c.opinions
        .map((o) => ({ ...o, date: parse(o.date, dateFormat, now) }))
        .sort((a, b) => (isAfter(a.date, b.date) ? 1 : -1))
        .map((o) => ({
          y: o.count,
          x: format(o.date, "MMM d"),
        }))
    );

    const flatCats = flatMap(perCategory);
    const days = uniq(flatCats.map((c) => c.x));
    const datasets = perCategory.map((c) => c.map((x) => x.y));
    const max =
      Math.round((1.2 * Math.max(...flatCats.map((x) => x.y))) / 100) * 100;

    return {
      max,
      labels: days,
      datasets,
      datasetNames: categories.map((c) => c.name),
    };
  }, [categories]);

  return data;
};
