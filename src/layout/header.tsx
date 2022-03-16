import React, { useMemo } from "react";

import { DashboardHeaderRow } from "../components/dashboard/dashboard-header-row";
import { HeaderFooterLayoutPanel } from "../components/header-footer-layout-panel";
import { Page, useCurrentPage } from "../hooks/use-current-page";

export const Header = () => {
  const currentPage = useCurrentPage();

  const headerBottomRow = useMemo(() => {
    if (currentPage !== Page.DASHBOARD) return null;

    return <DashboardHeaderRow />;
  }, [currentPage]);

  return <HeaderFooterLayoutPanel>{headerBottomRow}</HeaderFooterLayoutPanel>;
};
