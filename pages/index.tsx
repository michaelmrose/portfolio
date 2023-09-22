import Head from "next/head";
import styled, { css } from 'styled-components';
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import MastodonIcon from "@/components/icons/MastodonIcon";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My work" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="space-y-12 mb-[500px]">
        <HeaderSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
      </main>
    </>
  );
}
const HeaderSection = () => (
  <section className="space-y-4 ml-4 mt-6">
    <h1 className="text-4xl font-extrabold tracking-tight text-slate-200 sm:text-5xl">Michael Rose</h1>
    <h2 className="text-lg font-semibold tracking-tight text-slate-200 sm:text-xl">Full-Stack Developer in Seattle</h2>
    <p className="text-base leading-normal sm:text-lg">I build awesome websites</p>
    <SocialMediaLinks />
  </section>
);

const SocialMediaLinks = () => (
    <ul className=" ml-1 mt-8 flex items-center" aria-label="Social media">
      <GithubIcon/>
      <LinkedInIcon/>
      <MastodonIcon/>
    </ul>

);

const AboutSection = () => (
  <section className="space-y-4">
    <SectionHeading title="About" subtitle="" />
    <Card
      heading=""
      date=""
      description=""
      linkText=""
      linkTarget="">
      <p className="my-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor id diam ultricies mi. Euismod quis viverra nibh cras pulvinar mattis. Mollisio ut enim. Interdum varius sit amet mattis. Viverra mauris in aliquam sem fringilla ut morbi tincidunt. Ultricies leo integer malesuada nunc vel risus commodo viverra.
      </p>
      <p className="my-3">
        Rhoncus dolor purus non enim praesent elementum facilisis. Enim nulla aliquet porttitor ultricies tristique nulla aliquet enim tortor. In massa tempor nec feugiat nisl pretium fusce. Dolor sed viverra ipsum nunc aliquet bibendum. Pulvinar neque laoreet suspendisse interdum.
      </p>
    </Card>
  </section>
);

const ProjectsSection = () => (
  <section className="space-y-4">
    <SectionHeading title="Projects" subtitle="" />
    <Card
      heading="RA Journal"
      date="2023"
      description="Your Personal Tracker for Rheumatoid Arthritis Management. Living with RA means navigating a complex landscape of symptoms like pain, stiffness, and fatigue. This app allows you to journal these symptoms alongside life events to identify trends and triggers. By correlating changes such as reduced sleep quality with symptom flare-ups, RA Journal empowers you with insights to better manage your condition. Take control, gain awareness, and step into a healthier tomorrow. Implimented with the MERN stack and the Radix component library
"
      linkText="Learn more"
      linkTarget="https://github.com/michaelmrose/rajournal-app">
    </Card>

    <Card
      heading="Casharoo"
      date="2023"
      description="Casheroo is a user-friendly personal finance app with a Postgres/Django backend and a javascript frontend styled with tailwind that centralizes your financial data, integrates multiple accounts, and lets you project your spending and income into the future to make better choices now.
"
      linkText="Learn more"
      linkTarget="https://github.com/michaelmrose/casharoo">
    </Card>

    <Card
      heading="Human Help"
      date="2023"
      description="A Javascript Mongo Express App to connect users to the help they need in real time in real spaces."
      linkText="Learn more"
      linkTarget="https://github.com/michaelmrose/humanhelp">
    </Card>


    <Card
      heading="Cave Invaders"
      date="2023"
      description="A glorious call back to Atari games implimented in client side JS and HTML5 Canvas. Cave Invaders sees you heroicly defending your base at the center of a winding cave system from neverending waves ofnefarious alien invadiers. It show cases a good usage of class based inheritence.  "
      linkText="Learn more"
      linkTarget="https://github.com/michaelmrose/caveInvaders">
    </Card>

    <Card
      heading="Rdr"
      date="2023"
      description="A handy cli interface to searching and opening books from your calibre library or recently read titles from your library. Written in clojure and AOT compiled with Oracles innovative GRAAL"
      linkText="Learn more"
      linkTarget="https://github.com/michaelmrose/rdr">
    </Card>
  </section>
);

const ExperienceSection = () => (
  <section className="space-y-4">
    <SectionHeading title="Experience" subtitle="" />
    <Card
      heading="General Assembly"
      date="May—Sep 2023"
      description="Completed 480 hours of expert-led instruction in JavaScript, Python, React, Django, Node.js, and hands-on learning of full stack software development in the industry's most in demand technologies. See portfolio for details.
"
      linkText=""
      linkTarget="">
    </Card>

    <Card
      heading="Astound Broadband"
      date="2022—2023"
      description="Solving technical challenges one customer at a time."
      linkText=""
      linkTarget="">
    </Card>
    <Card
      heading="Home Depot"
      date="2014—2022"
      description="Leading a team of 12-15"
      linkText=""
      linkTarget="">
    </Card>

  </section>
);
