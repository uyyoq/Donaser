

const Profile = (props) => {
  return (
    <div className="flex flex-col items-center container mx-auto mt-20 font-Open-sans">

      <div className="flex relative">
        <img className="h-auto w-28" src={props.pictureProfile} />
        <div className="absolute pt-20 pl-20">
          <img className="shadow rounded-full h-8 w-auto z-10" src={props.settingProfile} />
        </div>
      </div>


      <p className="text-2xl text-gray-800 my-6">{props.userName}</p>
      <div className="flex">
        <img className="h-auto w-4" src={props.igImg} />
        <p className="text-gray-600 mx-1">{props.accIg}</p>
      </div>


      <div className="flex mt-24 items-end">
        <img className="h-auto w-10" src={props.badgeImg} />
        <p className="text-2xl mx-1">{props.badge}</p>
      </div>
    </div>
  )
}

export default Profile