import React from "react";

import { ChildrenOnly } from "../../util/types";
import { DownloadIcon } from "../icon/download-icon";
import { FacebookIcon } from "../icon/facebook-icon";
import { TwitterIcon } from "../icon/twitter-icon";

// TODO: Implement download handle?
type Props = ChildrenOnly & { download?: boolean };
export const ShareHandlesContainer = ({ children, download = true }: Props) => (
  <div className="flex justify-between select-none">
    <div>{children}</div>
    <div className="flex space-x-3 cursor-pointer">
      <TwitterIcon />
      <FacebookIcon />
      {download && <DownloadIcon />}
    </div>
  </div>
);
