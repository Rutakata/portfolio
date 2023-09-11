"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";


export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
    <button
      className={`w-fit h-fit p-2 self-center rounded-full hover:bg-slate-300 hover:dark:bg-[#27303c] duration-200 bg-slate-200 dark:bg-[#2f3a47]`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <BsFillMoonFill size={20} /> : <BsFillSunFill size={20} />}
    </button>
  );
};