import Link from "next/link";
interface cardData {
  heading: string
  description: string
  linkText: string
  linkTarget: string
}
const Card = function Card({heading, description, linkText, linkTarget}:cardData) {
  return (
    <div className="mt-5 w-10/12 mx-auto   rounded-lg shadow">
      <div
        className="p-3  rounded-lg md:p-8"
        id="about"
        role="tabpanel"
        aria-labelledby="about-tab"
      >
        <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {heading}
        </h2>

        <p className="mb-3 text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <Link
          href={linkTarget}
          className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
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
      </div>
    </div>
  );
};

export default Card;
