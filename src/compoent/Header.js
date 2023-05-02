import React from "react";
import InfoTeam from './InfoTeam'
import Style from './Style';
function Header() {
  return (
    <>
      <header className="flex justify-between items-center w-full h-14  ">
       <div className={Style.contenierPic.box}><img className={Style.contenierPic.img} src={InfoTeam[0].img} alt="" /></div>
        <div className="links w-1/4 bg-transparent flex justify-evenly items-center p-1 ">
        <a className="hover:text-cyan-700" href="#hwoWEAre">About</a>
         <a className="hover:text-cyan-700" href="#003goorje">What we do</a>
         <a  className="hover:text-cyan-700" href="pp">hwo we are</a>
        </div>
      </header>
    </>
  );
}
export default Header;
