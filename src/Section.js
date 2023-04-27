import React from "react";
import Card from "./Card.js";
import InfoTeam from "./InfoTeam";
function Section() {
    function mapping(arr) {
      const resault = arr.map(function (item){
        <Card
          key={item.id}
          firstName={item.firstName}
          lastName={item.lastName}
          email={item.email}
          tel={item.tel}
          img={item.img}
        />;
      });
      return resault;
    }
  return (
    <section className="flex gap-4 flex-col  align-center items-center w-full h-fit p-4">
    {mapping(InfoTeam)}
    <Card
    key='osam213123a'
    first='maher'
    last='{item.lastName}'
    email="{item.email}"
    tel="{item.tel}"
    img=""
  />;
    </section>
  );
}
export default Section;
