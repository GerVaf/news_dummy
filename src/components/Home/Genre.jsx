import React, { useState } from "react";
import Category from "../../utils/Category";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Genre = () => {
  
  const categories = [
    {
      title: "music",
      text: "Get the latest news of your favourite music, artists or labels from all around the globe. We cover both international and local market's latests trends and direct exclusives news & interviews in INDX music.",
    },
    {
      title: "sport",
      text: "Get the latest results of your favourite match, players or clubs from all around the globe. We cover both Premier League & Champion League games by patnering with ISPO & Leagues Regulator internationally. Find local market's latests trends and listen exclusives news & interviews directly in INDX sports.",
    },

    {
      title: "radio",
      text: "Listen to latest music from all around the globe. We cover both international and local market's latests hits, artists collective picked playlists, live jams & hear everything you need with INDX Radio.",
    },
  ];

  const [active, setActive] = useState(categories[0]);

  return (
    <div className="max-w-[1300px] mx-auto pt-10">
      <div className="grid grid-cols-12 gap-5 p-5 relative darkLightBg">
        <Category
          categories={categories}
          active={active}
          setActive={setActive}
        />
        {/* Left */}
        <div className="col-span-12 xl:col-span-9 xl:h-full text-white flex flex-col gap-5">
          <h1 className="text-4xl font-bold uppercase">
            {active.title} Focused
          </h1>
          <p>{active.text}</p>
        </div>
        {/* Right */}
        <Splide
          options={{
            type: "fade",
            rewind: true,
            autoplay: true,
            arrows: false,
            interval: 1000,
          }}
          aria-label="My Favorite Images"
          className="col-span-12 xl:col-span-3"
        >
          <SplideSlide>
            <img
              src="https://plus.unsplash.com/premium_photo-1700170363213-add0962221c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
              alt="Image 1"
              className="w-full h-full"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://images.unsplash.com/photo-1682695795557-17447f921f79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
              alt="Image 2"
              className="w-full h-full"
            />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Genre;
