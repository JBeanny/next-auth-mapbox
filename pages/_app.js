import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Navbar from "../components/Navbar";
import "mapbox-gl/dist/mapbox-gl.css";
import Head from "next/head";
import { DropdownContextProvider } from "../context/DropdownContext";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <DropdownContextProvider>
      <Head>
        <title>Bean Compass</title>
        <meta property="og:title" content="BeanCompass" key="title" />
        <link rel="icon" href="/compass-favicon.png" />
        <meta property="og:title" content="BeanCompass" key="title" />
      </Head>
      <SessionProvider session={session}>
        <Navbar />
        <Component {...pageProps} />
      </SessionProvider>
    </DropdownContextProvider>
  );
}
