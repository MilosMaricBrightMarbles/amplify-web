import dynamic from "next/dynamic";
import React from "react";

import { useTopTerms } from "../../../hooks/use-top-terms";
import { ShareHandlesContainer } from "../share-handles-container";

const TermsPanel = dynamic(() => import("../terms-panel"), { ssr: false });

export const TopTermsSection = () => {
  const { name, keywords, hashtags } = useTopTerms();

  return (
    <div className="flex flex-col space-y-10">
      <div className="flex flex-col space-y-2">
        <ShareHandlesContainer download={false}>
          <div className="flex space-x-1 text-lg font-semibold lg:text-xl">
            <div className="font-thin">Top terms for</div>
            <span className="font-medium">{name}</span>
          </div>
        </ShareHandlesContainer>
      </div>
      <div className="flex flex-col space-y-3 space-x-0 lg:flex-row lg:space-y-0 lg:space-x-6">
        <TermsPanel name="Top Keywords" terms={keywords} />
        <TermsPanel name="Top Hashtags" terms={hashtags} />
      </div>
    </div>
  );
};
