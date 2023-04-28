import React from "react";
import Style from "./Style";
function Details(props) {
  return (
    <div className="">
      <h3 className="text-xl font-medium ">details : </h3>
      <div className=" flex flex-col justify-start items-start w-fit h-fit overflow-hidden ">
        <a className={Style.links} href="p">
          {props.tel !== null ? "TEL : " + props.tel : ""}
        </a>
        <a className={Style.links} href="p">
          {props.email !== null
            ? "Email : " + props.email
            : "don't have an email"}
        </a>
      </div>
    </div>
  );
}

export default Details;
