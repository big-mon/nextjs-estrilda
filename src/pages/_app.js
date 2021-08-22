import Head from "next/head";
import "tailwindcss/tailwind.css";
import { SITE_NAME } from "../lib/constants";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{SITE_NAME}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
