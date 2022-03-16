// eslint-disable-next-line no-restricted-imports
import Link from "next/link";
import React from "react";

import { Routes } from "../../util/routes";
import { ChildrenOnly } from "../../util/types";

export const HomeLink = ({ children }: ChildrenOnly) => (
  <Link href={Routes.HOME}>{children || "Home"}</Link>
);
