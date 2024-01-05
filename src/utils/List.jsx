import React from "react";
import { Link } from "react-router-dom";

const List = ({ array }) => {
  return (
    <div className="space-y-4 mt-5">
      {array.map((item) => (
        <>
          {item.link === "https://indxnews.net" ? (
            <a
              key={item.id}
              className="navMenu ml-3"
              target="blank"
              href={item.link}
            >
              {item.title}
            </a>
          ) : (
            <Link key={item.id} className="navMenu ml-3" to={`${item.link}`}>
              {item.title}
            </Link>
          )}
        </>
      ))}
    </div>
  );
};

export default List;
