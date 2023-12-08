import React from "react";
import { Link } from "react-router-dom";

const WhyAdvertiseWithUs = () => {
  const texts = [
    {
      description:
        "We are well aware of how knowledge makes meaning from information BUT in today's age with DATA information, we want to highlight that information also can generates relevance from DATA.",
    },
    {
      description:
        "We are a team of journalists, analysts, developers led by whose forte is music business and we have helped many people & brands get verified on social media platforms.",
    },
    {
      description:
        "We power the business of sports, music & culture by guiding our audiences from discovery to obsession.",
    },
    {
      description:
        "We present what's now, what's not and what's possible by covering more companies, industries and markets in more depth than anybody else, while we are always looking for the links between them.",
    },
    {
      description:
        "We intend to improve communication, enhanced decision making and provide greater access to information & knowledge of everyones in the community. +We cares all the business-related informations happening in a present real time.",
    },
    {
      description:
        "We are always passionate about working with the media related businesses because we believe we can develop an effect that would affect all three levels of information system, which are operational-level systems, management-level systems, strategic-level systems.",
    },
    {
      description:
        "We consistently break news to all the way around the world, trying to explain in all its complexities, so that you get the bigger picture within music, sports, business, cultures while also engaging with them in a way that increases awareness and correlates to sales.",
    },
    {
      description:
        "We save you the time, money and effort of getting you published and we do it in a short time frame with a lot broader landscape across any medium possible.",
    },
    {
      description:
        "Just a single article on a high authority website can cost hundreds, but not with us and also we are constantly exploring new technologies, strategies to enhance our services and provide our readers with an exceptional user experience",
    },
    {
      description:
        "We ensure that creators, records labels, athletes, football clubs & brands are able to reach their target audience effectively while providing readers with high- quality content.",
    },
  ];

  return (
    <div className="bg-black">
      <div className="max-w-[1000px] mx-auto py-5 px-5 lg:p-0 flex flex-col gap-5">
        <h1 className="text-white font-bold text-3xl lg:text-5xl text-center my-10">
          Why Advertise with us
        </h1>
        <ul className="text-white space-y-3">
          {texts.map((text) => {
            return (
              <li key={text}>
                <span className="font-bold text-xl">+</span> {text.description}
              </li>
            );
          })}
        </ul>
        <Link
          to={"/advertiseWithUs"}
          className="px-5 py-2 self-start border border-slate-100 text-white mb-5"
        >
          Advertise With Us
        </Link>
      </div>
    </div>
  );
};

export default WhyAdvertiseWithUs;
