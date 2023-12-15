import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import React, { useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import "@splidejs/react-splide/css";
import "./custom.css";
import { get } from "../../Global/api";
import SelectProgram from "../../utils/SelectProgram";

const Center = ({ category }) => {
  const [news, setNews] = useState();
  const [program, setProgram] = useState("International");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      get(`/programs?category=${category}&programs=${program}`).then(
        (response) => {
          setNews(response?.data?.data);
          // console.log(news)
          setIsLoading(false);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }, [program]);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div className="bg-bgColor rounded text-white flex flex-col items-start pb-8 gap-5">
      {/* Top */}
      <SelectProgram program={program} setProgram={setProgram} />
      {/* SlideShow */}
      <Splide
        hasTrack={false}
        options={{
          type: "loop",
          rewind: true,
          autoplay: true,
          gap: 10,
        }}
        aria-label="My Favorite Images"
        className="h-[400px] lg:h-[500px] mb-8 w-full"
      >
        <SplideTrack>
          {news[0]?.blogs?.map((el) => {
            return (
              <SplideSlide
                key={el.id}
                className="w-full h-[400px] lg:h-[500px]"
              >
                <img
                  src={el.images?.url}
                  alt="Image 1"
                  className="w-full h-[400px] lg:h-[500px] object-cover relative"
                />
                <div className="absolute bottom-0 flex items-end bg-gradient-to-b from-transparent via-black/60 to-black/90 h-1/3 w-full">
                  <h1 className="text-xl leading-10 lg:text-3xl font-bold px-4 mb-10 lg:leading-[3.2rem]">
                    {el.title}
                  </h1>
                </div>
              </SplideSlide>
            );
          })}
        </SplideTrack>
        <div className="splide__arrows custom-arrows">
          <button className="splide__arrow splide__arrow--prev">
            <FaArrowCircleRight className="text-2xl" />
          </button>
          <button className="splide__arrow splide__arrow--next">
            <FaArrowCircleRight className="text-2xl" />
          </button>
        </div>
      </Splide>
    </div>
  );
};

export default Center;
