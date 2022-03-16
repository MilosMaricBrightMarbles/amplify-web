import clsx from "clsx";
import React from "react";

import { ChildrenAndClass } from "../util/types";

type Props = ChildrenAndClass & { innerContainerClassName?: string };
export const ContentContainer = ({
  children,
  className,
  innerContainerClassName,
}: Props) => (
  <div className={clsx("w-full", className)}>
    <div
      className={clsx(
        "flex flex-col py-8 px-2 mx-auto space-y-5 w-full max-w-[1280px] md:px-6",
        innerContainerClassName
      )}
    >
      {children}
    </div>
  </div>
);
