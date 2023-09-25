import { useEffect } from "react";
import Spotlight from "@/components/Spotlight";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Header from "../components/Header";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
export default function App({ Component, pageProps }: AppProps) {

  return (
    <Theme>
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
</Theme>
  );
}
