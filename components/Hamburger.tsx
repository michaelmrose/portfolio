import React from "react";
import { useRouter } from 'next/router';
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";


const Dropdown = () => {
  const router = useRouter();
  
  const handleItemClick = (url: string) => {
    router.push(url);
    // Add code to close the dropdown here.
  };
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="mb-3 ml-2 mt-4 sm:hidden md:hidden ml-3 rounded-full w-[50px] h-[50px] inline-flex items-center justify-center text-violet11 bg-white shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
          aria-label="Customise options"
        >
            <HamburgerMenuIcon style={{ width: '50%', height: '50%' }} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <DropdownMenu.Item className="group text-[26px] my-5 leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
            <div onClick={()=> handleItemClick("/")}>Home </div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="group text-[26px] my-5 leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
            <div onClick={()=> handleItemClick("/about")}>About us </div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="group text-[26px] my-5 leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
            <div onClick={()=> handleItemClick("/contact")}>contact </div>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
