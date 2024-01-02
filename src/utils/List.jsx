import React from "react";

const List = ({ array }) => {
  return (
    <div className="space-y-4 mt-5">
      {array.map((item, i) => (
        <a
          key={i}
          className="navMenu ml-3"
          target="blank"
          href={`https://indxnews.net`}
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default List;
