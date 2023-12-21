import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  // State to store the form data
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

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
    // Additional form submission logic goes here
  };

  return (
    <div className="w-full h-full z-50 relative flex flex-col py-20 justify-center items-center bg-white ">
      <h1 className="text-5xl font-bold">SignUp to your account</h1>
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
        {/* sigin up href and remind text and SignUp */}
        <div className="flex justify-around items-center">
          <button className="btn" type="submit">
            SignUp
          </button>
          <div className="flex justify-between items-center gap-3">
            <p>If you already have an account!</p>
            <Link
              className=" underline text-red-500 cursor-pointer"
              to={"/login"}
            >
              Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
