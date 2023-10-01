import '../styles/globals.css';

import { config, dom } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import { createGlobalStyle } from 'styled-components';
config.autoAddCss = false;
const GlobalStyles = createGlobalStyle`
    ${dom.css()}
`;

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/image/favicon.ico" />
      </Head>
      <GlobalStyles />
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </div>
  );
}

export default MyApp;
