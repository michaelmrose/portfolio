import { useEffect } from "react";
import Spotlight from "@/utilities/spotlight";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Header from "../components/Header";
export default function App({ Component, pageProps }: AppProps) {

    useEffect(() => {
        if (typeof window !== "undefined") {
            var light =new Spotlight({});
        }
        return () => {
        light?.destroy();
    }
    }, []);

  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: "light", dark: "dark" }}
      defaultTheme="system"
    >
      <Header />
      <div className="bg-blue-600 h-1 w-full text-3xl font-bold underline">
      </div>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
