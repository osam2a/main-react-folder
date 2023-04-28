import React from "react";
import Card from "./Card.js";
import InfoTeam from "./InfoTeam";
function Section() {

  
  function mapping(arr) {
    const resault = arr.map(function (item) {
      return (
        <Card
          key={item.id}
          firstName={item.firstName}
          lastName={item.lastName}
          email={item.email}
          tel={item.tel}
          img={item.img}
        />
      );
    });
    return resault;
  }

  console.log(`this Array`, mapping(InfoTeam));
  return (
    <section className="flex gap-4 flex-col  align-center items-center w-full h-fit p-4">
      {mapping(InfoTeam)}
    </section>
  );
}
export default Section;
