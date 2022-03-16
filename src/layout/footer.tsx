import React from "react";

import { HeaderFooterLayoutPanel } from "../components/header-footer-layout-panel";

export const Footer = () => (
  <HeaderFooterLayoutPanel className="bg-gray-100" markNavigation={false}>
    <div className="flex justify-between w-full text-sm text-gray-400">
      <div>© AMPLIFY for Healthcare 2022. All rights reserved.</div>
      <div>Terms of Use</div>
    </div>
  </HeaderFooterLayoutPanel>
);
