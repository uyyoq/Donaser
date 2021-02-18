import LoginCard from '../Components/loginCard/loginCard'
import Form from '../Components/Form/form'

const login = () => {
  return (
    <div className="flex flex-col mt-20 justify-center">
      <div className="flex justify-center cursor-default">
        <img className="h-full w-16 md:w-20 lg:w-16" src="/front/company-logo.svg" />
      </div>
      <div className="mt-24">
        <p className="text-center mb-6 text-xs md:text-sm text-gray-700">Masuk Dengan</p>
        <div className="flex justify-center">
          <LoginCard googleImg="/login/Google__G__Logo.svg" facebookImg="/login/facebook.svg" />
        </div>
        <p className="text-center mt-12 md:mt-16 text-xs md:text-sm text-gray-700">ATAU</p>
        <Form visibily="/login/visibility.svg/"/>
      </div>

    </div>
  )
}

export default login
