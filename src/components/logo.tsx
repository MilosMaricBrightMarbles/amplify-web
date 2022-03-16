import React from "react";

import logo from "../../public/assets/logo.svg";
import { AmplifyImage } from "./amplify-image";

export const Logo = () => (
  <div className="flex space-x-2">
    <AmplifyImage src={logo} sizes="48px" className="w-12 h-12" />
    <div className="text-xs text-amplify-dark-blue uppercase">
      <div>Amplify</div>
      <div>For</div>
      <div>Healthcare</div>
    </div>
  </div>
);
