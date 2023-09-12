"use client"
import { useState } from "react";
import { ThemeSwitcher } from "../app-theme/ThemeSwitcher";
import CustomLink from "../common/CustomLink";
import { AiOutlineArrowRight, AiOutlineArrowLeft, AiFillHome, AiFillAppstore, AiFillInfoCircle } from 'react-icons/ai';
import { MdContacts } from 'react-icons/md';
import { usePathname } from 'next/navigation';


export default function SidebarMenu() {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const currentPath = usePathname();

  const handleMenuClosure = () => {
    setIsOpened(false);
  }

  return (
    <nav 
      className={`absolute top-0 left-0 flex min-h-full w-[300px] flex-col justify-between px-3 py-8 bg-gray-600 dark:bg-slate-800 ${isOpened ? 'top-0 left-0': 'top-0 left-[-300px] '} duration-200`}>
      <div className="flex flex-col gap-9">
        <p className="text-xl font-bold px-2 border-b-2 p-1">
          Vlad Pelishenko
        </p>
        <div className='flex flex-col gap-4' onClick={handleMenuClosure}>
          <CustomLink href='/' text='Home' pathName={currentPath} icon={<AiFillHome size={25} />} />
          <CustomLink href='/about-me' text='About me' pathName={currentPath} icon={<AiFillInfoCircle size={25} />} />
          <CustomLink href='/projects' text='Projects' pathName={currentPath} icon={<AiFillAppstore size={25} />} />
          <CustomLink href='/contacts' text='Contacts' pathName={currentPath} icon={<MdContacts size={25} />} />
        </div>
      </div>
      <ThemeSwitcher />
      <div className="absolute top-2/4 translate-y-[-50%] pl-3 left-[276px]  flex justify-center items-center rounded-r-full w-12 h-12 bg-gray-600 dark:bg-slate-800 duration-200"
      onClick={() => setIsOpened(!isOpened)}>
        {isOpened ? <AiOutlineArrowLeft size={25}/> : <AiOutlineArrowRight size={25}/>}
      </div>
    </nav> 
  )
}
