import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const nav = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    nav("/dashboard");
  };

  return (
    <div className="w-full h-full z-50 relative flex flex-col py-20 justify-center items-center bg-white ">
      <h1 className="text-5xl font-bold">Login to your account</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 lg:w-[50%] p-5"
      >
        <div className="flex flex-col gap-2">
          <label className="text-2xl" htmlFor="username">
            Username
          </label>
          <input
            placeholder="Enter your name"
            className="input-form"
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-2xl" htmlFor="password">
            Password
          </label>
          <input
            placeholder="Enter your password"
            className="input-form"
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {/* sigin up href and remind text and login */}
        <div className="flex justify-around items-center">
          <button className="btn" type="submit">
            Login
          </button>
          <div className="flex justify-between items-center gap-3">
            <p>If you don't have an account!</p>
            <Link
              className=" underline text-red-500 cursor-pointer"
              to={"/sign-up"}
            >
              Sign up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
