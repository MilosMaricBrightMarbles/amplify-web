import React from "react";

import fbIcon from "../../../public/assets/fb_icon.svg";
import { AmplifyImage } from "../amplify-image";

export const FacebookIcon = () => (
  <AmplifyImage
    src={fbIcon}
    sizes="(min-width: 640px) 20px, 16px"
    className="w-4 h-4 cursor-pointer sm:w-5 sm:h-5"
  />
);
