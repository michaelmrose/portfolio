import React from "react";
import * as Separator from "@radix-ui/react-separator";

interface SectionHeaderData {
  title: string
  subtitle: string
}

export default function SectionHeader({ title, subtitle }: SectionHeaderData) {
  return (
    <div className="mt-6 ml-3 mx-auto sticky top-0 z-10 w-full sectionHeading relative">
      <h1 className="dark:text-white mt-4 text-black text-sm font-medium absolute left-0 right- 0 mb-14" id={title}>
        {title}
      </h1>
      <h2 className="dark:text-white  mt-4 text-grey-500 text-xl">
        {subtitle}
      </h2>
    </div>
  )

}

