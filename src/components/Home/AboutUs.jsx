import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useState } from "react";
import "@splidejs/react-splide/css";
import { motion } from "framer-motion";
import AboutCategory from "./AboutCategory";

const AboutUs = () => {
  // For Category Active
  const categories = [
    {
      title: "music",
      text: "Get the latest news of your favourite music, artists or labels from all around the globe. We cover both international and local market's latests trends and direct exclusives news & interviews in INDX music.",
    },
    {
      title: "sport",
      text: "Get the latest results of your favourite match, players or clubs from all around the globe. We cover both Premier League & Champion League games by patterning with ISPO & Leagues Regulator internationally. Find local market's latests trends and listen exclusives news & interviews directly in INDX sports.",
    },

    {
      title: "radio",
      text: "Listen to latest music from all around the globe. We cover both international and local market's latests hits, artists collective picked playlists, live jams & hear everything you need with INDX Radio.",
    },
  ];
  const [active, setActive] = useState(categories[0]);

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
    <div className="max-w-[1300px] mx-auto pt-10">
      {/* Category */}
      <AboutCategory category={active}>
        {/* Choose category */}
        <div className="flex xl:absolute xl:bottom-5 xl:left-5">
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
                    animate={
                      active.title === cate.title ? "animate" : "initial"
                    }
                    className="px-3"
                  >
                    {cate.title}
                  </motion.div>
                  <motion.div
                    variants={cateVarient2}
                    animate={
                      active.title === cate.title ? "animate" : "initial"
                    }
                    className="bg-white px-3 text-black"
                  >
                    {cate.title}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </AboutCategory>
    </div>
  );
};

export default AboutUs;
