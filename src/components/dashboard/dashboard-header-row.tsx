import React, { useCallback } from "react";

import usaFlag from "../../../public/assets/usa_flag.png";
import { AmplifyImage } from "../amplify-image";
import { Dropdown } from "../dropdown";
import { DownloadIcon } from "../icon/download-icon";
import { DemographicsDropdown } from "./demographics-dropdown";

export const DashboardHeaderRow = () => {
  const countryDefaultValue = useCallback(
    () => (
      <div className="flex items-center space-x-1.5">
        <AmplifyImage src={usaFlag} sizes="24px" className="w-6 h-6" />
        <div>United States of America</div>
      </div>
    ),
    []
  );

  return (
    <div className="flex justify-between items-start md:items-center">
      <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
        <Dropdown defaultContent="Last 7 days" enabled={false} />
        <DemographicsDropdown />
        <Dropdown defaultContent={countryDefaultValue} enabled={false} />
      </div>
      <div className="flex space-x-2 text-xs cursor-pointer select-none sm:text-sm lg:text-base">
        <DownloadIcon />
        <div className="text-gray-400">Download report</div>
      </div>
    </div>
  );
};
