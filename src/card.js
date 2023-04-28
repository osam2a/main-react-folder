import React from "react";
import Style from "./Style";
import Details from "./Details";
function Card(props) {
  return (
    <div className="flex flex-col gap-4 justify-start items-center bg-white w-fit h-fit p-2 rounded hover:bg-orange-700   transition-all ">
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
