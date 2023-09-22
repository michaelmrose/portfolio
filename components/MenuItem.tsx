// import Link from "next/link"
import { Link, animateScroll as scroll } from "react-scroll";
import * as Menubar from "@radix-ui/react-menubar";
interface MenuData {
  linkName: string
  linkTarget: string
}
export default function MenuItem({ linkName, linkTarget }: MenuData) {
  return (
    <Menubar.Menu>
      <Menubar.Trigger className="py-2 px-3 outline-none select-none font-medium leading-none rounded text-violet11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
        <Link
          to={linkTarget}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {linkName}
        </Link>
      </Menubar.Trigger>
    </Menubar.Menu>
  )

}