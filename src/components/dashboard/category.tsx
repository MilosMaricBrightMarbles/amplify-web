import clsx from "clsx";
import { useAtom } from "jotai";
import React, { useCallback, useMemo } from "react";

import { activeCategoryIndexAtom } from "../../util/atoms";
import { blueGradientBackgroundStyles } from "../../util/constants";
import { ConversationCategory } from "../../util/types";

type Props = { category: ConversationCategory; index: number };
export const Category = ({
  index,
  category: { name, percentageDelta, percentage },
}: Props) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useAtom(
    activeCategoryIndexAtom
  );

  const isActiveCategory = useMemo(
    () => activeCategoryIndex === index,
    [activeCategoryIndex, index]
  );
  const onClick = useCallback(() => {
    setActiveCategoryIndex(isActiveCategory ? null : index);
  }, [index, isActiveCategory, setActiveCategoryIndex]);

  const deltaTextColor = useMemo(() => {
    if (isActiveCategory) return "text-white";

    if (percentageDelta === 0) return "";

    return percentageDelta > 0 ? "text-green-600" : "text-red-600";
  }, [isActiveCategory, percentageDelta]);

  const formatNumber = useCallback((n: number) => {
    const rounded = Math.round(n);

    return rounded === n ? n : n.toFixed(1);
  }, []);

  return (
    <div
      className={clsx(
        "flex flex-col justify-between py-4 px-3 mx-auto space-y-3 w-full max-w-[500px] text-base bg-white rounded-lg shadow cursor-pointer"
      )}
      style={isActiveCategory ? blueGradientBackgroundStyles : {}}
      onClick={onClick}
    >
      <div className={clsx("flex justify-between")}>
        <div
          className={clsx(isActiveCategory && "text-white", "line-clamp-2")}
          title={name}
        >
          {name}
        </div>
        <div className={clsx(deltaTextColor, "flex space-x-1")}>
          {percentageDelta !== 0 && (
            <div className="font-semibold">
              {percentageDelta > 0 ? "↑" : "↓"}
            </div>
          )}
          <div>{formatNumber(Math.abs(percentageDelta))}%</div>
        </div>
      </div>
      <div
        className={clsx(
          "text-lg font-semibold lg:text-2xl",
          isActiveCategory ? "text-white" : "text-amplify-dark-blue"
        )}
      >
        {formatNumber(percentage)}%
      </div>
    </div>
  );
};
