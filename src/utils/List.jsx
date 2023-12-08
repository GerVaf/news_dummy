import React from "react";

const List = ({ array }) => {
  return (
    // for accordian list
    <div className="space-y-4 mt-5">
      {array.map((item, i) => (
        <h1 key={i} className="navMenu ml-3">
          {item}
        </h1>
      ))}
    </div>
  );
};

export default List;
