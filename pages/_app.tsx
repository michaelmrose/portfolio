import { useEffect } from "react";
import Spotlight from "@/components/Spotlight";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Header from "../components/Header";
export default function App({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: "light", dark: "dark" }}
      defaultTheme="system"
    >
      <Header />
      <Spotlight/>
      <div className="bg-blue1 h-1 w-full text-3xl font-bold underline ">
      </div>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
