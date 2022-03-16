import { useAtomValue } from "jotai";
import React from "react";

import { categoriesAtom } from "../../../util/atoms";
import { Category } from "../category";
import { ShareHandlesContainer } from "../share-handles-container";

export const TopCategoriesSection = () => {
  const categories = useAtomValue(categoriesAtom);

  return (
    <div className="flex flex-col space-y-10">
      <div className="flex flex-col space-y-2">
        <ShareHandlesContainer>
          <div className="text-xl font-semibold md:text-2xl">
            Top categories of conversation
          </div>
          <div className="text-xs text-gray-400 lg:text-sm">
            Click on a category to filter other charts
          </div>
        </ShareHandlesContainer>
      </div>
      <div className="flex flex-col space-y-4 w-full sm:flex-row sm:space-y-0 sm:space-x-4">
        {categories.map((c, i) => (
          <Category category={c} key={c.name} index={i} />
        ))}
      </div>
    </div>
  );
};
