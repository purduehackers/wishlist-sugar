import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

import { createGlobalStyle } from "styled-components";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
const GlobalStyles = createGlobalStyle`
    ${dom.css()}
`;

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <div>
      <Head>
        <link
            rel="shortcut icon"
            href="/image/favicon.ico"
          />
      </Head>
      <GlobalStyles/>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </div>
  );
}

export default MyApp;
