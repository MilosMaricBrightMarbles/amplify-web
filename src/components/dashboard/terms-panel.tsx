import React, { useMemo } from "react";

import { Term } from "../../util/types";

type Props = {
  name: string;
  terms: Term[];
};
export const TermsPanel = ({ name, terms }: Props) => {
  const termsWithPercentages = useMemo(
    () =>
      terms.map((t) => ({
        ...t,
        percentage: Math.max(1, Math.floor((100 * t.count) / terms[0].count)),
      })),
    [terms]
  );

  return (
    <div className="flex flex-col py-3 px-5 space-y-4 w-full bg-white rounded-lg shadow-lg">
      <div className="text-lg font-semibold">{name}</div>
      <div className="flex flex-col space-y-3">
        {termsWithPercentages.map((t, i) => (
          <div
            className="flex items-center space-x-2 text-xs sm:text-sm lg:text-base"
            key={t.name}
          >
            <div className="w-5 font-semibold">{i + 1}.</div>
            <div className="flex overflow-hidden relative grow items-center rounded-lg">
              <div
                className="absolute z-20 h-full bg-term-primary-blue"
                style={{ width: `${t.percentage}%` }}
              />
              <div className="absolute z-10 w-full h-full bg-term-secondary-blue" />
              <div className="flex z-30 items-center p-3 space-x-3 ">
                <div className="w-10 font-semibold">
                  {t.count.toLocaleString()}
                </div>
                <div
                  className="font-thin text-gray-800 line-clamp-1"
                  title={t.name}
                >
                  {t.name}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default TermsPanel;
