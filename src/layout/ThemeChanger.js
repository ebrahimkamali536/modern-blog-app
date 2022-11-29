import React, { useState } from "react";
import { useTheme } from "next-themes";
import {
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";
const ThemeChanger = () => {
  const [openChooseTheme, setOpenChooseTheme] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  console.log(currentTheme);
  if (currentTheme === "dark") {
    return (
      <button
        className="flex items-center py-1 px-2"
        onClick={() => setTheme("light")}
      >
        <SunIcon className="w-6 h-6" />
      </button>
    );
  }

  return (
    <button
      className="flex items-center py-1 px-2"
      onClick={() => setTheme("dark")}
    >
      <MoonIcon className="w-6 h-6" />
    </button>
  );
};

export default ThemeChanger;
