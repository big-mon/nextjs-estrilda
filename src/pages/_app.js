import Head from "next/head";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{process.env.NEXT_PUBLIC_SITE_NAME}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
