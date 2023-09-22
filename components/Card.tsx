import { ChildProcess } from "child_process";
import Link from "next/link";
import { ReactNode } from "react";
interface CardData {
  heading: string
  date: string
  description: string
  linkText: string
  linkTarget: string
  tags?: string[]
  screenShot?: string
  children?: ReactNode
}


const Card: React.FC<CardData> = ({ heading, date, description, linkText, linkTarget, children, tags, screenShot }) => {
  return (
    <div className="bg-transparent hover:bg-blue4  mt-5 w-10/12 mx-[100px]  rounded-lg shadow hover:border-solid hover:border-1 hover:border-white-300">

      <div
        className="p-3  rounded-lg md:p-8"
        id="about"
        role="tabpanel"
        aria-labelledby="about-tab"
      >

        <div className="mb-3 text-gray-500 dark:text-slate-400">
          {date}
        </div>
        <h2 className="inline-flex items-baseline text-lg leading-tight text-slate-100 hover:text-teal-300 focus-visible:text-teal-300 ">
          {heading}
        </h2>

        <div>
          {children || null}
        </div>
        <div className="mb-3 text-gray-500 dark:text-slate-200 text-sm">
          {description}
        </div>
        {linkTarget &&
          <Link
            href={linkTarget}
            target="_blank"
            className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700 my-3"
          >
            {linkText}
            <svg
              className="w-6 h-6 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              >
              </path>
            </svg>
          </Link>
          }
        <div className="flex  flex-wrap gap-2 place-items-stretch place-content-center w-[500px]">
          {tags?.map((tag, idx) => (
            <span
              // className="bg-teal-500 rounded-md p-2"
              className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 "
              key={idx}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
