import "@/styles/globals.css";
import "@/styles/fonts/paperlogy.css";
// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
