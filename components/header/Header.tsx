import Link from "next/link";
import { ThemeSwitcher } from "../app-theme/ThemeSwitcher";

export default function Header() {
  return (
    <header className='flex flex-row justify-between h-20 bg-gray-400 dark:bg-slate-600'>
      <div className='flex gap-4'>
        <Link href='/about-me' className='align-middle text-xl'>About me</Link>
        <Link href='/projects' className='align-middle text-xl'>My projects</Link>
      </div>
      <ThemeSwitcher />
    </header>
  )
}
