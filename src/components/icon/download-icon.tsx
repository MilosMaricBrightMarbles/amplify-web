import React from "react";

import downloadIcon from "../../../public/assets/download_Icon.svg";
import { AmplifyImage } from "../amplify-image";

export const DownloadIcon = () => (
  <AmplifyImage
    src={downloadIcon}
    sizes="(min-width: 640px) 20px, 16px"
    className="w-4 h-4 cursor-pointer sm:w-5 sm:h-5"
  />
);
