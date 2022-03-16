import clsx from "clsx";
import React, { ReactNode, useCallback } from "react";

import { Page, useCurrentPage } from "../hooks/use-current-page";
import { DashboardLink } from "./links/dashboard-link";
import { HomeLink } from "./links/home-link";

const links: { page: Page; component: ReactNode }[] = [
  { page: Page.HOME, component: <HomeLink /> },
  { page: Page.DASHBOARD, component: <DashboardLink /> },
];
type Props = { markCurrentPage?: boolean };
export const NavigationPanel = ({ markCurrentPage = true }: Props) => {
  const currentPage = useCurrentPage();
  const shouldMark = useCallback(
    (page: Page) => markCurrentPage && page === currentPage,
    [currentPage, markCurrentPage]
  );

  return (
    <div className="flex space-x-3">
      {links.map(({ page, component }) => (
        <div
          key={page}
          className={clsx(
            shouldMark(page)
              ? "font-medium text-amplify-dark-blue"
              : "font-light text-gray-400"
          )}
        >
          {component}
          {shouldMark(page) && (
            <div className="mx-auto w-3 h-1 bg-amplify-dark-blue rounded-3xl" />
          )}
        </div>
      ))}
    </div>
  );
};
