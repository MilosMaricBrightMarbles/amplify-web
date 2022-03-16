import React from "react";

import twitterIcon from "../../../public/assets/twitter_icon.svg";
import { AmplifyImage } from "../amplify-image";

export const TwitterIcon = () => (
  <AmplifyImage
    src={twitterIcon}
    sizes="(min-width: 640px) 20px, 16px"
    className="w-4 h-4 cursor-pointer sm:w-5 sm:h-5"
  />
);
