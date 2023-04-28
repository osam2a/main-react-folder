import React from "react";
import Style from "./Style";
import Details from "./Details";
function Card(props) {
  return (
    <div className="group flex flex-col gap-4 justify-start items-center bg-green-300 w-80 h-fit max-h-52 p-2 rounded-md overflow-hiddenc drop-shadow-xl">
      <header className={Style.header}>
        <div className={Style.contenierPic.box}>
          <img className={Style.contenierPic.img} src={props.img} alt="" />
        </div>

        <h1 className={Style.tLgW}>{`${props.firstName} ${props.lastName}`}</h1>
      </header>
      <div className={Style.links}>
        <Details email={props.email} tel={props.tel} />
      </div>
    </div>
  );
}

export default Card;
