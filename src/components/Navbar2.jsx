import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarVariants = {
    scrolled: { y: "-100%" },
    // notScrolled: { backgroundColor: "transparent", color: "black" },
  };

  const navData = [
    {
      id:1,
      title:'News',
      addition:[
        {
          id:1,
          title:'Music',
          link:'/music'
        },
        {
          id:2,
          title:'Sport',
          link:'/sports'
        },
        {
          id:3,
          title:'Business',
          link:'business'
        },
        {
          id:4,
          title:'Detail',
          link:'/detail'
        }
      ]
    }
  ]
  return (
    <motion.div
      variants={navbarVariants}
      animate={isScrolled ? "scrolled" : "notScrolled"}
      className="sticky top-10 z-10 text-black"
    >
      <div className="flex gap-2 items-center p-5 justify-center">
        {navData.map((el) => {
          return (
            <motion.div
              key={el.id}
              className="text-lg relative flex items-center justify-center cursor-pointer"
              onMouseEnter={() => setOpenDropdown(el.id)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {/* parent title */}
              <motion.div className="flex justify-center items-center hover:text-red-500 transition duration-150">
                [<p>{el.title}</p>
                {el?.addition ? (
                  <IoIosArrowDown className="text-[15px] font-bold" />
                ) : (
                  ""
                )}
                ]
              </motion.div>
              {/* child dropdown */}
              {openDropdown === el.id && el?.addition && (
                <motion.div
                  className="absolute top-full left-0 px-5 py-2 flex flex-col bg-white shadow-md gap-2"
                  variants={navbarVariants}
                  animate={isScrolled ? "scrolled" : "notScrolled"}
                >
                  {el.addition.map((child) => (
                    <motion.p
                      className="hover:text-red-500 transition duration-150"
                      key={child.id}
                    >
                      <Link to={child.link}>{child.title}</Link>
                    </motion.p>
                  ))}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Navbar2;
