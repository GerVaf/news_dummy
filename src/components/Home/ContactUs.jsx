import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoLocation, IoMail } from "react-icons/io5";
const ContactUs = () => {
  return (
    <div className="w-[90%] lg:w-[80%] rounded bg-[#efefef] dark:bg-bgColor text-bgColor dark:text-white p-5 absolute left-[50%] -translate-x-[50%] bottom-40 lg:bottom-48 z-20">
      <div className=" lg:w-[80%] mx-auto flex flex-col gap-5">
        <div className="space-y-5">
          <h1 className="text-4xl font-bold text-center">Contact Us</h1>
          <p className="text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et
            a iure quia sint placeat temporibus nulla voluptas! Nostrum error
            voluptatibus temporibus aut nesciunt inventore velit consectetur
            ipsum dignissimos quos.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-5">
          {/* address */}
          <div className=" col-span-12 lg:col-span-4 flex flex-col items-center gap-3">
            <FaPhone className="text-2xl" />
            <p>09 797797979</p>
          </div>
          <div className=" col-span-12 lg:col-span-4 flex flex-col items-center gap-3">
            <IoMail className="text-2xl" />
            <p>example@gmail.com</p>
          </div>
          <div className=" col-span-12 lg:col-span-4 flex flex-col items-center gap-3">
            <IoLocation className="text-2xl" />
            <p className="text-center w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              corporis?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
