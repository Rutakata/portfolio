import Link from 'next/link';
import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { AiFillHome } from 'react-icons/ai';


type Props = {
  href: string,
  text: string,
  icon: ReactNode,
  pathName: string
}

export default function CustomLink({href, text, icon, pathName}: Props) {
  return (
    <Link href={href} className={`text-xl ${pathName === href ? 'dark:bg-yellow bg-yellow' : ''} hover:bg-[#878d99] hover:dark:bg-yellow py-1 px-2 duration-100 rounded-md flex flex-row gap-2 items-center`}>
      {icon}
      {text}
    </Link>
  )
}
