import React from "react";

const List = ({ array }) => {
  // Define a mapping from index to subdomain
  const subdomainMap = {
    0: "advertise",
    1: "business",
    2: "partner",
  };

  return (
    <div className="space-y-4 mt-5">
      {array.map((item, i) => (
        <a
          key={i}
          className="navMenu ml-3"
          target="blank"
          href={`https://${subdomainMap[i]}.opaqueindustries.news`}
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default List;
