const LoginCard = (props) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="border cursor-pointer border-gray-600 mr-3 px-14 md:px-16 py-1 md:py-2">
        <img className="h-3 w-auto md:h-5" src={props.facebookImg} ></img>
        </div>
        <div className="border cursor-pointer border-gray-600  px-14 md:px-16 py-1 md:py-2">
        <img className="h-3 w-auto md:h-5" src={props.googleImg} ></img>
        </div>
      </div>
    </>
  )
}

export default LoginCard