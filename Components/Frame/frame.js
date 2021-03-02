
const Frame = (props) => {
  return (
    <div>
      <div className="font-Open-sans">
        <img src={props.content}></img>
        <div className="float-right mx-5 mb-5">
          <img className="h-12 w-auto" src={props.love}></img>
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
    </div>
  )
}

export default Frame