import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";


const Form = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleSubmit, register, errors } = useForm()
  const onSubmit = (data) => console.log(data);

  const togglePasswordVisiblity = () => {
    setShowPassword(showPassword ? false : true);
  };

  return (
    <div className="flex justify-center mt-5">
      <form className="flex flex-col container">
        <div className="flex flex-col border-b border-gray-600 pb-1">
          <input
            className=" focus:outline-none text-sm md:text-md"
            type="email"
            name="email"
            placeholder="Email"
            ref={register({
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
        </div>
        {errors.email && errors.email.type == "required" && (
          <p id="error" className="text-red-500 mt-1 text-xs my-auto"> Email Harus Diisi! </p>
        )}
        {errors.email && errors.email.type == "pattern" && (
          <p id="error" className="text-red-500 mt-1 text-xs my-auto"> Alamat Email Tidak Valid </p>
        )}


        <div className="flex mt-3 border-b border-gray-600">
          <div className="w-full mr-2">
            <input
              className=" focus:outline-none text-sm md:text-md"
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
          </div>
          <div className="w-10">
            <img onClick={togglePasswordVisiblity}
              className="text-gray-600 h-auto bg-white cursor-pointer"
              src={showPassword ? "/login/visibility-on.svg" : "/login/visibility.svg"} />
          </div>
        </div>
        {errors.password && <p id="error" className="text-red-500 mt-1 text-xs">{errors.password.message}</p>}


        <Link href="/mainMenu">
          <a
            className="bg-black hover:bg-gray-900 text-white py-1 mt-5 font-semibold focus:outline-none text-center"
            type="button"
            onClick={handleSubmit(onSubmit)}>
            LOG IN
          </a>

        </Link>

      </form>

      <style jsx>
        {
          `
           #error {
             background-image: url('https://www.flaticon.com/svg/vstatic/svg/179/179386.svg?token=exp=1613616950~hmac=dfe5d3fc64985e57285b09a6ccc4ca80');
             background-size:contain;
             background-repeat: no-repeat;
             text-indent: 20px;
             background-size: 12px auto;
             background-position-y: center;
            }
          `
        }

      </style>

    </div>
  )
}

export default Form
