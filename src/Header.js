import React from "react";
import "./index.css";
import "./App.css";
function Header() {
  return (
    <>
      <header className="flex justify-evenly items-center w-full h-14 bg-gray-500">
        <svg>Osama Youssef</svg>
        <div className="links bg-transparent flex justify-start items-center p-1 ">
        <a href="pp">About</a>
         <a href="pp">What we do</a>
        </div>
      </header>
    </>
  );
}
export default Header;
