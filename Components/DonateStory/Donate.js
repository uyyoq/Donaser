
const Donate = (props) => {
  return (
    <div className="flex flex-col mx-auto justify-center container my-5 px-5">
      <p className="text-2xl text-gray-500 ">Today</p>

      <div className="text-xs m-6">
        <div className="flex flex-row items-center">
          <img src={props.profile1} />
          <p className="ml-3">{props.title1}</p>
        </div>

        <img src={props.line} />

        <div className="flex flex-row items-center">
          <img src={props.profile2} />
          <p className="ml-3">{props.title2}</p>
        </div>

        <img src={props.line} />

        <div className="flex flex-row items-center">
          <img src={props.profile1} />
          <p className="ml-3">{props.title3}</p>
        </div>

        <img src={props.line} />

        {/* ellipse */}
        <div>
          <div className="relative mr-20">

            <div className="absolute left-7">
              <img src={props.profileBlur} />
            </div>

            <div className="absolute left-4">
              <img src={props.profile1} />
            </div>

            <div className="absolute left-0">
              <img src={props.profile2} />
            </div>
          </div>
          <div className="relative">
            <p className="whitespace-nowrap overflow-hidden overflow-ellipsis w-24 absolute left-16 pl-2 pt-1">dan 9 lainnya memperbarui aktivitas</p>
          </div>
        </div>
      </div>

      <p className="text-2xl text-gray-500 mt-10">This Week</p>

      <div className="text-xs m-6">
        <div className="flex flex-row items-center">
          <img src={props.profile1} />
          <p className="ml-3">{props.title1}</p>
        </div>

        <img src={props.line} />

        <div className="flex flex-row items-center">
          <img src={props.profile2} />
          <p className="ml-3">{props.title2}</p>
        </div>
      </div>
    </div>
  )
}

export default Donate