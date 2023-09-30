import React from "react";
import * as Menubar from "@radix-ui/react-menubar";
import { useTheme } from "next-themes";
import Link from "next/link";
import Hamburger from "./Hamburger";
import MenuItem from "./MenuItem";

const MenubarDemo = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center ">
      <Hamburger />

      <Menubar.Root className="hidden sm:flex  w-[400px] mx-auto bg-white p-[3px] justify-around my-5 rounded-lg shadow-[0_2px_10px] shadow-blackA7">

<MenuItem linkName="Home" linkTarget="Main"/>
<MenuItem linkName="About" linkTarget="About"/>
<MenuItem linkName="Projects" linkTarget="Projects"/>
<MenuItem linkName="Experience" linkTarget="Experience"/>

    <Menubar.Menu>
      <Menubar.Trigger className="py-2 px-3 outline-none select-none font-medium leading-none rounded text-violet11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
        <a
          href="/resume.pdf"
          target="_blank"
        >
          Resume
        </a>
      </Menubar.Trigger>
    </Menubar.Menu>

      </Menubar.Root>
    </div>
  );
};

export default MenubarDemo;
