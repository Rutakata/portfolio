import Link from 'next/link';
import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { AiFillHome } from 'react-icons/ai';


type Props = {
  href: string,
  text: string,
  icon: ReactNode
}

export default function CustomLink({href, text, icon}: Props) {
  return (
    <Link href={href} className='text-xl hover:bg-[#878d99] hover:dark:bg-[#54647a] py-1 px-2 duration-100 rounded-md flex flex-row gap-2 items-center'>
      {icon}
      {text}
    </Link>
  )
}
