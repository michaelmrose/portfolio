import React, { useState } from 'react';
import { useRouter } from 'next/router';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon, ChevronDownIcon } from '@radix-ui/react-icons';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  
  const menuItems = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/#About' },
    { label: 'Projects', url: '/#Proj' },
    { label: 'Experience', url: '/#Exp' },
  ];

  const handleItemClick = (url: string) => {
    router.push(url);
    setIsOpen(false);
  };

  return (
    <DropdownMenu.Root onOpenChange={(open) => setIsOpen(open)}>
      <DropdownMenu.Trigger asChild>
        <button
          className="transition duration-300 ease-in-out mb-3 ml-2 mt-4 sm:hidden md:hidden ml-3 rounded-full w-[50px] h-[50px] inline-flex items-center justify-center text-violet11 bg-white shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-violet3 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-violet11"
        >
          {
          isOpen ? 
          <div className="inline-flex items-center flex-col">
  <HamburgerMenuIcon style={{ width: '24px', height: '24px' }} />
  <ChevronDownIcon style={{ width: '10px', height: '10px', marginTop: '4px' }} />
</div>
          :
           <HamburgerMenuIcon style={{ width: '50%', height: '50%' }} />
           }
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="mx-0 rounded-lg transition duration-300 ease-in-out min-w-[220px] absolute top-0 left-0 right-0 w-[300px]  bg-black absolute bg-opacity-60 backdrop-blur   p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade">
          {menuItems.map((item) => (
            <DropdownMenu.Item
              key={item.url}
              onSelect={() => handleItemClick(item.url)}
              className="group transition duration-300 ease-in-out text-[40px] my-6  leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
            >
              {item.label}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
