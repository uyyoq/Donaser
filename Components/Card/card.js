

const Card = (props) => {
  return (
    <div className="border-b mb-6 border-gray-300">

      <div className="flex justify-between">
        <div className="flex mx-5 md:mx-7 mb-3 items-center ">
          <img className="mr-3 h-6 md:h-10 w-auto" src={props.profile} ></img>
          <p className="text-xs md:text-base">{props.username}</p>
        </div>
        <div>
          <img className="h-5 w-auto mr-6 mb-4 md:h-6 md:mr-8 md:mt-1" src={props.dots}></img>
        </div>

      </div>
      <div className="flex justify-center">
        <img className="w-auto h-auto" src={props.content} ></img>
      </div>


      {/* progres bar */}
      <div>
        <div className="relative">
          <div className="overflow-hidden h-2 mb-2 text-xs flex bg-yellow-200">
            <div style={{ width: props.progres }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"></div>
          </div>
        </div>


        <div className="flex m-5 justify-around ">
          <div className="flex items-center">
            <img className="h-4 md:h-8 w-auto" src="/card/flash.svg"></img>
            <p className="ml-1 text-xs md:text-base">{props.donationMoney}</p>
          </div>
          <div className="flex items-center">
            <img className="h-5 md:h-9 w-auto" src="/card/playads.svg"></img>
            <p className="ml-1 text-xs md:text-base" >{props.donationAds}</p>
          </div>
          <div className="flex items-center">
            <img className="h-4 md:h-8 w-auto" src="/card/love.svg"></img>
            <p className="ml-1 text-xs md:text-base">{props.like}</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Card