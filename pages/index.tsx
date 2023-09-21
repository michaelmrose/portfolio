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
        <title>My Porftfolio</title>
        <meta name="description" content="My work" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Show title="Projects" subtitle="" />
        <Card
          heading="RA Journal"
          date="2023"
          description=" A totally real description"
          linkText="Learn more"
          linkTarget="/read">
        </Card>

        <Card
          heading="Casharoo"
          date="2023"
          description="A totally real description."
          linkText="Learn more"
          linkTarget="/read">
        </Card>

        <Card
          heading="Human Help"
          date="2023"
          description="A totally real description."
          linkText="Learn more"
          linkTarget="/read">
        </Card>


        <Card
          heading="Cave Invaders"
          date="2023"
          description="A totally real description."
          linkText="Learn more"
          linkTarget="/read">
        </Card>

        <Card
          heading="Rdr"
          date="2023"
          description="A totally real description."
          linkText="Learn more"
          linkTarget="/read">
        </Card>

        <Show title="Professional Experience" subtitle="" />

        <Card
          heading="General Assembly"
          date="May—Sep 2023"
          description="A totally real description."
          linkText="Learn more"
          linkTarget="/read">
        </Card>

        <Card
          heading="Astound Broadband"
          date="2022—2023"
          description="A totally real description."
          linkText="Learn more"
          linkTarget="/read">
        </Card>
        <Card
          heading="Home Depot"
          date="2014—2022"
          description="A totally real description."
          linkText="Learn more"
          linkTarget="/read">
        </Card>
      </main>
    </>
  );
}
