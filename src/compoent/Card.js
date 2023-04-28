import React from "react";
// import Style from "./Style";
// import Details from "./Details";
function Card(props) {
  return (
    <>
      <div className="max-w-lg- w-1/2 rounded-2xl border-2 border-sky-500 overflow-hidden lg:max-w-full lg:flex">
        <div
          className={`
            h-full w-full  rounded-t text-center overflow-hidden flex-none
             bg-red-400 bg-cover  bg-center bg-no-repeat 
             lg:h-auto lg:w-48 lg:rounded-l lg:rounded-t-none 
            `}
          style={{ backgroundImage: `url(${props.img})` }}
          title={`${props.firstName} ${props.lastName}`}
        ></div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              <svg
                className="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns={props.img}
                viewBox="0 0 20 20"
              >
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Members only
            </p>

            <div className="text-gray-900 font-bold text-xl mb-2">
              {props.jop}
            </div>

            <p className="text-gray-700 text-base">{props.bio}</p>
            <div className=" flex flex-col justify-center text-sm ">
              {props.tel !== null ? <a>TEL :{props.tel}</a> : ""}
              {props.email !== null ? <a>Email : {props.email}</a> : ""}
            </div>
          </div>

          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={props.img}
              alt="Avatar of Jonathan Reinink"
            />

            <div className="text-sm ">
              <p className="text-gray-900 leading-none">
                {props.firstName} {props.lastName}
              </p>
              <p className="text-gray-600">Aug {props.age}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
