import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleSubmit, register, errors } = useForm()
  const onSubmit = (data) => console.log(data);

  const togglePasswordVisiblity = () => {
    setShowPassword(showPassword ? false : true);
  };

  return (
    <div className="mt-5">
      <form className="flex flex-col">
        <div className="flex flex-col mb-8 md:mb-10">
          <input
            className="border-b border-gray-600 focus:outline-none mx-8 md:mx-56 text-xs md:text-sm"
            type="email"
            name="email"
            placeholder="Email"
            ref={register({
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.email && errors.email.type == "required" && (
            <p id="error" className="text-red-500 mt-1 ml-8 md:ml-56 text-xs"> Email Harus Diisi! </p>
          )}
          {errors.email && errors.email.type == "pattern" && (
            <p id="error" className="text-red-500 ml-8 mt-1 md:ml-56 text-xs "> Alamat Email Tidak Valid </p>
          )}
        </div>

        <div className="flex flex-col mb-2 md:mb-3">
          <input
            className="border-b border-gray-600 focus:outline-none mx-8 md:mx-56 text-xs md:text-sm"
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            ref={register({
              required: "Password Harus Diisi!",
              minLength: {
                value: 8,
                message: "Password Minimal 8 Karakter"
              }
            })}
          />
          <i><img onClick={togglePasswordVisiblity}
            className="text-gray-600 absolute w-5 h-auto cursor-pointer right-8 bottom-20 lg:bottom-16 md:bottom-60 md:pb-0 lg:pb-2 pb-10 md:right-56"
            src={showPassword ? "/login/visibility-on.svg" : "/login/visibility.svg"} /></i>
          {errors.password && <p id="error" className="text-red-500 mt-1 ml-8 md:ml-56 text-xs">{errors.password.message}</p>}
        </div>

        <button className="bg-gray-900 hover:bg-gray-800 text-white mb-4 py-1 mx-8 md:mx-56 mt-8 font-semibold focus:outline-none text-center"
          type="button" onClick={handleSubmit(onSubmit)}>LOG IN</button>
      </form>

      <style jsx>
        {
          `
           #error {
             background-image: url('https://www.flaticon.com/svg/vstatic/svg/179/179386.svg?token=exp=1613616950~hmac=dfe5d3fc64985e57285b09a6ccc4ca80');
             background-size:contain;
             background-repeat: no-repeat;
             text-indent: 20px;
            }
          `
        }

      </style>

    </div>
  )
}

export default Form
