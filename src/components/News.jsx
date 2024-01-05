import React, { useEffect, useState } from "react";
import { get } from "../Global/api";
import { Center, Pagination } from "@mantine/core";
import music from "/public/musicWhite.svg";
import sport from "/public/sportWhite.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { detail } from "../Global/Slice/blogSlice";

const News = ({ category }) => {
  const [recentNews, setRecentNews] = useState([]);
  const [page, setPage] = useState();
  const [totalPages, setTotalPages] = useState();
  const regex = /(<([^>]+)>)/gi;
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      get(`/published_blogs?category=${category}&limit=11&page=${page}`).then(
        (response) => {
          const sortDateData = response?.data?.data?.sort((a, b) =>
            a.date < b.date ? 1 : -1
          );
          setRecentNews(sortDateData);
          setTotalPages(response?.data?.pagination?.totalPages);
          setIsLoading(false);
          console.log(response?.data?.data);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }, [page]);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div className="bg-bgColor">
      <div className="flex flex-col gap-5 w-full flex-wrap md:flex-nowrap text-white justify-center items-center p-5 max-w-[1300px] mx-auto">
        {recentNews?.map((el) => {
          return (
            <div
              onClick={() => {
                nav("/detail");
                dispatch(detail(el));
              }}
              key={el.id}
              className="grid grid-cols-12 text-white hover:bg-white/20 border border-slate-50/60 rounded-md duration-200 transition-all"
            >
              {/* left side  */}
              <div className="col-span-12 md:col-span-4 lg:col-span-3">
                <img
                  className="aspect-square rounded-md object-cover"
                  src={el?.images?.url}
                  alt=""
                />
              </div>
              {/* right side  */}
              <div className="col-span-12 md:col-span-8 lg:col-span-9 flex flex-col gap-5 p-5">
                {/* title and author  */}
                <div className="gap-3 flex flex-col">
                  <h1 className="md:text-sm lg:text-2xl text-lg font-bold">
                    {el?.title}
                  </h1>
                  <p className="md:text-sm lg:text-base text-sm italic">
                    <img
                      src={`${el?.category === "music" ? music : sport}`}
                      alt=""
                      className="h-8"
                    />
                  </p>
                </div>
                {/* content  */}
                <div className="flex flex-col justify-between h-full">
                  <div className=" text-sm lg:text-base">
                    {el?.description
                      ?.replace(regex, "")
                      ?.replace(
                        /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
                        " "
                      )
                      .substring(0, 300)}
                    ...
                  </div>
                  <span className="text-end underline text-sm lg:font-bold cursor-pointer">
                    Read More . . .
                  </span>
                </div>
              </div>
            </div>
          );
        })}
        {/* Pagination */}
        <Center my={"lg"}>
          <Pagination total={totalPages} onChange={setPage} value={page} />
        </Center>
      </div>
    </div>
  );
};

export default News;
