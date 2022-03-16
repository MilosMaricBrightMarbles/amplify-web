import clsx from "clsx";
// eslint-disable-next-line no-restricted-imports
import NextImage, { ImageProps } from "next/image";
import React from "react";

type Props = ImageProps & {
  sizes: string;
  className: string;
};

export const AmplifyImage = ({ sizes, className, src }: Props) => (
  <div className={clsx("relative", className)}>
    <NextImage src={src} sizes={sizes} layout="fill" objectFit="contain" />
  </div>
);
