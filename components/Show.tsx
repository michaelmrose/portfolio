import React from "react";
import * as Separator from "@radix-ui/react-separator";

const SeparatorDemo = () => (
  <div className="container mt-6 mx-auto p-3">
    <h1 className="dark:text-white mt-4 text-black text-3xl font-medium">
      Radix Primitives UI 
    </h1>
    <h2 className="dark:text-white  mt-4 text-grey-500 text-xl">
      Visually or semantically separates content.
    </h2>

    <Separator.Root className="bg-violet6 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]" />
  </div>
);

export default SeparatorDemo;
