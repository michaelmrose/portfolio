import { useEffect } from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import Show from "../components/Show";
import Card from "../components/Card";
import Head from "next/head";
import Spotlight from "@/utilities/spotlight";
import styled, { css } from 'styled-components'



export default function Home() {
useEffect(() => {
    if (typeof window !== "undefined") {
      new Spotlight({});
    }
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Show title="A title" subtitle="test"/>
        <Card 
            heading="A totally real heading" 
            description="A totally real description."
            linkText="Learn a lot more"
            linkTarget="/read"/>
        <Card 
            heading="A totally real heading" 
            description="A totally real description."
            linkText="Learn a lot more"
            linkTarget="/read"/>
      </main>
    </>
  );
}
