import Link from "next/link";
import Image from "next/image";
import { ReactNode, useState, useEffect, useRef } from "react";
import ReactCardFlip from 'react-card-flip'
import { Flex, Text, Button } from '@radix-ui/themes';

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
  const [isFlipped, setIsFlipped] = useState(false)
  const cardFrontRef = useRef<HTMLDivElement>(null); // Specify the type here
  const [cardHeight, setCardHeight] = useState<number>(0); // To store the height

  useEffect(() => {
    // Measure and set the height once CardFront is mounted
    if (cardFrontRef.current) {
      const height = cardFrontRef.current.offsetHeight;
      setCardHeight(height);
    }
  }, []);

  const handleFlip = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    if (screenShot)
      setIsFlipped(prevIsFlipped => !prevIsFlipped)
  };

  function CardFront(props: any) {

    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);

    const handleTouchStart = (e: React.TouchEvent) => {
      setTouchStartX(e.changedTouches[0].screenX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
      setTouchEndX(e.changedTouches[0].screenX);
    };

    const handleTouchEnd = () => {
      // Logic to detect a sufficient "drag" to flip the card
      if (screenShot && Math.abs(touchEndX - touchStartX) > 300) { // 100 is a threshold, adjust as needed
        setIsFlipped(prevIsFlipped => !prevIsFlipped);
      }
    };
    return (
      <div onClick={handleFlip}
        className="bg-transparent hover:bg-blue4  mt-5  ml-[100px] mr-3 rounded-lg shadow hover:border-solid hover:border-1 hover:border-white-300 max-w-[600px] flex flex-col">

        {screenShot &&
          <Button onClick={handleFlip} className="self-end mt-3 mr-3">
            Flip me to see more
          </Button>}

        <div
          className="p-3  rounded-lg md:p-8 "
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
          <div className="mb-3 text-gray-500 dark:text-slate-200 text-lg">
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
          <div className="flex  flex-wrap gap-2 place-items-stretch place-content-center">
            {tags?.map((tag, idx) => (
              <span
                className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 "
                key={idx}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

    )
  }

  function CardBack(props: any) {

    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);

    const handleTouchStart = (e: React.TouchEvent) => {
      setTouchStartX(e.changedTouches[0].screenX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
      setTouchEndX(e.changedTouches[0].screenX);
    };

    const handleTouchEnd = () => {
      // Logic to detect a sufficient "drag" to flip the card
      if (screenShot && Math.abs(touchEndX - touchStartX) > 300) {
        setIsFlipped(prevIsFlipped => !prevIsFlipped);
      }
    };
    return (
      <div
        onClick={handleFlip}
        className="bg-transparent hover:bg-blue4  mt-5  ml-[100px] mr-3 rounded-lg shadow hover:border-solid hover:border-1 hover:border-white-300 max-w-[600px] flex flex-col">

        {screenShot &&
          <Button onClick={handleFlip} className="self-end mt-3 mr-3">
            Flip me to see more
          </Button>}

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



          <Image className="my-6" alt="screenshot" width={1024} height={600} src={screenShot!} />
          <div className="mb-3 text-gray-500 dark:text-slate-200 text-sm">
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
          <div className="flex  flex-wrap gap-2 place-items-stretch place-content-center">
            {tags?.map((tag, idx) => (
              <span
                className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 "
                key={idx}>
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>

    )
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div ref={cardFrontRef}>  {/* Setting the ref here */}
        <CardFront /* other props */ />
      </div>
      <div style={{ minHeight: `${cardHeight}px` }}>  {/* Using cardHeight here */}
        <CardBack /* other props */ />
      </div>
    </ReactCardFlip>
  );
};

export default Card;
