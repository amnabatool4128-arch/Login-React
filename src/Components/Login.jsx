import React, { useState } from "react";
import { assets } from "../assets/assets";

const Login = ({ onLogin, switchToSignup }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      onLogin(formData.email, formData.password)
    } 
    else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto bg-gradient-to-b from-white via-gray-100 to-yellow-100 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row min-h-[600px]">
          {/* Left Section */}
          <div className="w-full md:w-1/2 p-8 md:p-12">
            <div className="mb-10">
              <h1 className="inline-block px-6 py-3 border-2 rounded-full border-gray-800 font-bold text-xl">
                React
              </h1>
            </div>

            <div>
              <h2 className="text-3xl text-center mb-2 font-bold">
                Welcome Back
              </h2>
              <p className="text-gray-600 text-center mb-4">
                Sign in to your account to continue
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-3 bg-white rounded-full border border-gray-300 outline-none placeholder:text-sm placeholder:text-gray-600"
                    placeholder="Email Address"
                    type="email"
                  />
                </div>

                <div>
                  <input
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-6 py-3 bg-white rounded-full border border-gray-300 outline-none placeholder:text-sm placeholder:text-gray-600"
                    placeholder="Password"
                    type="password"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 rounded-full py-3 text-gray-900 font-semibold cursor-pointer"
                >
                  Sign in
                </button>
              </form>

              <div className="flex items-center my-6">
                <div className="grow border-t border-gray-300"></div>
                <span className="mx-4">or</span>
                <div className="grow border-t border-gray-300"></div>
              </div>

              <div className="flex space-x-4">
                <button className="w-1/2 px-6 py-3 bg-gray-800 font-semibold hover:bg-gray-900 transition duration-300 text-white rounded-full cursor-pointer flex items-center justify-center gap-2">
                  <img src={assets.appleImg} alt="apple" className="w-5 h-5" />
                  Apple
                </button>

                <button className="w-1/2 px-6 py-3 bg-white font-semibold border border-gray-300 text-gray-900 rounded-full cursor-pointer flex items-center justify-center gap-2">
                  <img
                    src={assets.googleImg}
                    alt="google"
                    className="w-5 h-5"
                  />
                  Google
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between mt-10 text-sm text-gray-600">
                <button
                  onClick={switchToSignup}
                  type="button"
                  className="hover:text-yellow-600 transition duration-200 mb-2 sm:mb-0 cursor-pointer"
                >
                  Don't have an account?
                  <span className="font-semibold ml-1"> Sign up</span>
                </button>

                <button
                  type="button"
                  onClick={() => alert("Forgot Password clicked")}
                  className="underline hover:text-yellow-600 transition duration-200"
                >
                  Forgot Password
                </button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2">
            <img
              src={assets.img2}
              className="w-full h-full object-cover"
              alt="banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
