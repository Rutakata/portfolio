import Link from 'next/link';
import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { AiFillHome } from 'react-icons/ai';


type Props = {
  href: string,
  text: string,
  newTab: boolean,
  icon?: ReactNode,
  pathName?: string
}

export default function CustomLink({href, text, icon, pathName, newTab}: Props) {
  return (
    <Link href={href} rel="noopener noreferrer" target={newTab ? "_blank": ""} className={`text-xl ${pathName === href ? 'dark:bg-gradient-to-r bg-gradient-to-r' : ''} hover:bg-gradient-to-r hover:dark:bg-gradient-to-r from-purple-400 to-pink-600 py-1 px-2 duration-100 rounded-md flex flex-row gap-2 items-center`}>
      {icon}
      {text}
    </Link>
  )
}
