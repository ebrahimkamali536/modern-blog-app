import React from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import ThemeChanger from "./ThemeChanger";
const links = ["بلاگ", "درباره ما"];

const Header = () => {
  return (
    <header className="bg-white text-slate-900 shadow-lg border-gray-100 shadow-white/10">
      <div className="container md:max-w-screen-xl mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-x-8">
          <Image src={logo} alt="logo" width="28" height="28" />
          <ul className="flex items-center gap-x-4">
            {links.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-x-4">
          {/* <ThemeChanger /> */}
          <button>bookmarked</button>
          <button>login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
