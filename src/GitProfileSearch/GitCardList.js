import React from "react";
import GitCard from "./GitCard";

const GitCardList = (props) => {
  return (
    <div>
      {props.profile.map((profile) => (
        <GitCard {...profile} />
      ))}
    </div>
  );
};

export default GitCardList;
