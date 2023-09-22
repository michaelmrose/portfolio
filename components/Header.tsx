import React from "react";
import * as Menubar from "@radix-ui/react-menubar";
import { useTheme } from "next-themes";
import Link from "next/link";
import Hamburger from "./Hamburger";
import MenuItem from "./MenuItem";

const MenubarDemo = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center">
      <Hamburger />

      <Menubar.Root className="hidden sm:flex  w-[340px] mx-auto bg-white p-[3px] justify-around my-5 rounded-lg shadow-[0_2px_10px] shadow-blackA7">

<MenuItem linkName="Home" linkTarget="/"/>
<MenuItem linkName="About" linkTarget="/#About"/>
<MenuItem linkName="Projects" linkTarget="/#Projects"/>
<MenuItem linkName="Experience" linkTarget="/#Experience"/>

      </Menubar.Root>
    </div>
  );
};

export default MenubarDemo;
