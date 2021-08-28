import Head from "next/head";
import { Header } from "../components/organisms/Header";
import { Footer } from "../components/organisms/Footer";
import { Container } from "../components/atoms/Container";
import { SITE_NAME } from "../lib/constants";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  const isHome = Component.isHome;
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{SITE_NAME}</title>
      </Head>

      <Header home={isHome} />
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </>
  );
}

export default MyApp;
