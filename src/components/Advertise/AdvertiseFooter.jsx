import React from "react";

const AdvertiseFooter = () => {
  return (
    <div className="bg-bgColor mx-5 rounded overflow-hidden my-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-xl lg:text-3xl font-bold text-white bg-gradient-to-r from-orange-700 to-pink-700 p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          commodi eveniet delectus necessitatibus officiis soluta dolorum, modi
          et aliquam quod suscipit esse? Aperiam quaerat hic modi maxime
          doloribus, accusantium quod.
        </h1>
        <div className="grid grid-cols-12 items-center gap-5 px-5 mb-5">
          <div className="col-span-12 lg:col-span-6 h-[450px]">
            <img
              src="https://images.unsplash.com/photo-1701198067976-3c2b6bf5f5c1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <p className="text-lg lg:text-xl font-semibold text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
              impedit voluptates, incidunt similique et possimus qui? Eveniet
              optio suscipit dolore nam in architecto, ad assumenda enim modi
              deleniti sunt odio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseFooter;
