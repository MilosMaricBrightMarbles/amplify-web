import { useAtomValue } from "jotai";
import React from "react";

import { activeCategoryAtom } from "../../../util/atoms";
import { OpinionsChart } from "../opinions-chart";
import { ShareHandlesContainer } from "../share-handles-container";

export const ChangeInTrendsSection = () => {
  const category = useAtomValue(activeCategoryAtom);

  return (
    <div className="flex flex-col space-y-10">
      <div className="flex flex-col space-y-2">
        <ShareHandlesContainer>
          <div className="text-xl font-semibold lg:text-2xl">
            Change in trends in categories of conversation
          </div>
          <div className="flex space-x-1 text-xs text-gray-400 sm:text-sm">
            <div>You are seeing data for</div>
            <span className="font-semibold text-gray-500">
              {category ? category.name : "all categories"}
            </span>
          </div>
        </ShareHandlesContainer>
      </div>
      <OpinionsChart />
    </div>
  );
};
