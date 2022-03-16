import "../styles/globals.css";

import type { AppProps } from "next/app";
import React from "react";

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

// eslint-disable-next-line import/no-default-export
export default App;
