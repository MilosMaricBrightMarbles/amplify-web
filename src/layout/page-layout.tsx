import Head from "next/head";
import React from "react";

import { ChildrenOnly } from "../util/types";
import { Footer } from "./footer";
import { Header } from "./header";

export const PageLayout = ({ children }: ChildrenOnly) => (
  <>
    <Head>
      <title>Amplify</title>
    </Head>
    <div className="flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  </>
);
