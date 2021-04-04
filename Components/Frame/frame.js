import React, { useState } from "react";


const Frame = (props) => {
  const [changeLove, setChangeLove] = useState(false);

  const handleChangeLove = () => {
    setChangeLove(changeLove ? false : true);
  };
  return (
    <div>
      <div className="font-Open-sans">
        <div className="flex relative justify-end">
          <img className="" src={props.content} />
          <div className="absolute mt-40 mx-8 md:mt-36">
            <img
              onClick={handleChangeLove}
              className="h-14 w-auto z-10"
              src={changeLove ? "/frame-menu/heart-inline.svg" : "/frame-menu/love-fullfilled.svg"}
            />
          </div>
        </div>
        <p className="m-4 mt-12 text-lg">{props.title}</p>
        <div className="flex justify-center mt-8">
          <a className="bg-black hover:bg-gray-800 text-white mb-4 py-2 px-28 font-semibold focus:outline-none text-center">DONASI</a>
        </div>

        <div className="relative my-4">
          <div className="overflow-hidden mx-5 h-2 mb-2 text-xs flex bg-yellow-200">
            <div style={{ width: props.progres }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"></div>
          </div>
        </div>

        <p className="mx-5 mt-10 text-xl text-gray-900">{props.nominal}</p>

        <div className="flex mt-1">
          <div className="self-center">
            <img src="/frame-menu/stick.svg" />
          </div>
          <div className="self-end text-gray-600">
            <p className="mb-6">{props.money}</p>
            <p>{props.ads}</p>
          </div>
        </div>

      </div>
      <style jsx>
        {
          `
           .shadoww {
            box-shadow: 0px 24px 39px -4px rgba(0,0,0,0.75);
            -webkit-box-shadow: 0px 24px 39px -4px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 24px 39px -4px rgba(0,0,0,0.75);
           }
          `
        }

      </style>

    </div>
  )
}

export default Frame