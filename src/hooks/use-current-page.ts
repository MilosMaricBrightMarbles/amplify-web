import { useRouter } from "next/router";
import { useMemo } from "react";

import { Routes } from "../util/routes";

export enum Page {
  HOME,
  DASHBOARD,
}

export const useCurrentPage = () => {
  const router = useRouter();

  const page: Page = useMemo(
    () => (router.pathname === Routes.HOME ? Page.HOME : Page.DASHBOARD),
    [router.pathname]
  );

  return page;
};
