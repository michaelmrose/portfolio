import Head from "next/head";
import styled, { css } from 'styled-components';
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";

export default function Home() {
    return (
        <>
            <Head>
                <title>My Portfolio</title>
                <meta name="description" content="My work" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="space-y-12">
                <HeaderSection />
                <AboutSection />
                <ProjectsSection />
                <ExperienceSection />
            </main>
        </>
    );
}
const DummySpacer = () => (
  <div className="h-[100px]"></div>  
);

const HeaderSection = () => (
    <section className="space-y-4 ml-4 mt-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-200 sm:text-5xl">Michael Rose</h1>
        <h2 className="text-lg font-semibold tracking-tight text-slate-200 sm:text-xl">Full-Stack Developer in Seattle</h2>
        <p className="text-base leading-normal sm:text-lg">I build websites</p>
        <SocialMediaLinks />
    </section>
);

const SocialMediaLinks = () => (
    <ul className="flex items-center space-x-5 text-xs" aria-label="Social media">
        <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
            <li className="mr-5 text-xs"><a className="block hover:text-slate-200" href="https://github.com/michaelmrose" target="_blank" rel="noreferrer">
                <span className="sr-only">GitHub</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></a></li>
            <li className="mr-5 text-xs"><a className="block hover:text-slate-200" href="https://www.linkedin.com/in/michaelmrose/" target="_blank" rel="noreferrer"><span className="sr-only">LinkedIn</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg></a></li></ul>
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
        <SectionHeading title="Proj" subtitle="" />
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
        <SectionHeading title="Exp" subtitle="" />
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
