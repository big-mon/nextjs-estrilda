import type { AppProps } from "next/app";
import Head from "next/head";
import { Header } from "../components/organisms/Header";
import { Footer } from "../components/organisms/Footer";
import "tailwindcss/tailwind.css";

const App = ({ Component, pageProps, router }: AppProps) => {
  const path = router.pathname;
  const isHome = path == "/" || path.startsWith("/page/");

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <Header home={isHome} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
