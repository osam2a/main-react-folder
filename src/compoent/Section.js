import React from "react";
import Card from "./Card.js";
import InfoTeam from "./InfoTeam";
function Section() {
  let getAge = (dateString) => {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  let regularExpressions = (text) => {
    const moudelWords =
      /html\d? |css|js|java script|javascript|sass|react.js|python|ts|type script|next.js|mysql/gim;
    const matchmoudel = text.match(moudelWords);
    // return text.replaceAll(moudelWords,`<span className="text-red-300">${moudelWords}</span>`)
    let resault = matchmoudel.map((ele) => {
      let varibal= text.replace(
        ele,
        `<span className="text-red-300">${ele}</span>`
        );
       
    });
    console.log(matchmoudel);
    return resault;
  };

  let mapping = (arr) => {
    const resault = arr.map(function (item) {
      return (
        <Card
          key={item.id}
          firstName={item.firstName}
          lastName={item.lastName}
          age={getAge(item.age)}
          jop={item.jop}
          bio={regularExpressions(item.bio)}
          email={item.email}
          tel={item.tel}
          img={item.img}
        />
      );
    });
    return resault;
  };

  return (
    <section className="flex gap-4 flex-col  align-center items-center w-full h-fit p-4">
      {mapping(InfoTeam)}
    </section>
  );
}
export default Section;
