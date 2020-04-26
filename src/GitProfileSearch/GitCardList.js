import React from "react";
import GitCard from "./GitCard";

const GitCardList = (props) => {
  return (
    <div>
      {props.profile.map((row, i) => (
        <GitCard key={i} {...row} />
      ))}
    </div>
  );
};

export default GitCardList;
