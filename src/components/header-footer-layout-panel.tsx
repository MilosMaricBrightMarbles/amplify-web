import React from "react";

import { ChildrenAndClass } from "../util/types";
import { ContentContainer } from "./content-container";
import { Logo } from "./logo";
import { NavigationPanel } from "./navigation-panel";

type Props = ChildrenAndClass & { markNavigation?: boolean };

export const HeaderFooterLayoutPanel = ({
  children,
  className,
  markNavigation = true,
}: Props) => (
  <ContentContainer className={className}>
    <div className="flex justify-between items-center w-full">
      <Logo />
      <NavigationPanel markCurrentPage={markNavigation} />
    </div>
    {children && (
      <>
        <div className="h-[1px] border-t border-gray-300" />
        <div className="w-full">{children}</div>
      </>
    )}
  </ContentContainer>
);
