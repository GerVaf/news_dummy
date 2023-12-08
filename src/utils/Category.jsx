import React from "react";
import { motion } from "framer-motion";

const Category = ({ categories,active,setActive }) => {
  // for unactive state animation
  const cateVarient = {
    initial: {
      y: 0,
      opacity: 1,
    },
    animate: {
      y: "-100%",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // for active state animation
  const cateVarient2 = {
    initial: {
      y: 0,
      scaleY: 0,
    },
    animate: {
      y: "-100%",
      scaleY: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="flex xl:absolute xl:-top-11 xl:right-0">
      <div className="flex items-center gap-3 text-white border border-slate-50/60 px-5 py-2 uppercase">
        {categories.map((cate) => {
          return (
            <div
              key={cate.title}
              className={` h-6 overflow-hidden relative cursor-pointer`}
              onClick={() => setActive(cate)}
            >
              <motion.div
                variants={cateVarient}
                animate={active.title === cate.title ? "animate" : "initial"}
                className="px-3"
              >
                {cate.title}
              </motion.div>
              <motion.div
                variants={cateVarient2}
                animate={active.title === cate.title ? "animate" : "initial"}
                className="bg-white px-3 text-black"
              >
                {cate.title}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
