import React from "react";

export const PurposeSection = () => (
  <div className="flex flex-col pb-8 space-y-6 border-b border-gray-300">
    <div className="text-xl font-semibold md:text-2xl">Purpose</div>
    <div className="text-sm text-justify text-gray-400 md:text-base">
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      Listening to people's questions and concerns is an important way for
      health authorities to learn about what matters to communities in response
      to COVID-19. This social listening platform aims to show real time
      information about how people are talking about COVID-19 online, so we can
      better manage as the infodemic and pandemic evolve.
    </div>
  </div>
);
