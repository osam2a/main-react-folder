import React from "react";
import Style from "./Style";

function Card(props) {
  return (
    <div className="flex gap-4 justify-start items-center bg-white w-fit h-fit p-2 ">

      <header>
        <div className={Style.contenierPic.box}>
          <img className={Style.contenierPic.img} src={props.img} alt="" />
        </div>

        <div className={Style.links}>
          <h1 className={Style.tLgW}>
            {props.first + props.last}
          </h1>

          <a className={Style.links} href="p">
            {props.key !== null ? "id :"+ props.key : ""}
          </a>
          <details>
            <a className={Style.links} href="p">
              {props.tel !== null ? "TEL : "+props.tel: ""}
            </a>
            <a className={Style.links} href="p">
              {props.email !== null ? "TEL :" + props.email : "don't have an email"}
            </a>
          </details>
        </div>
      </header>
    </div>
  );
}

export default Card;
