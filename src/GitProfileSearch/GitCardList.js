import React from "react";
import GitCard from "./GitCard";
import testData from "./TestData";

const GitCardList = (props) => {
  return (
    <div>
      <GitCard {...testData[0]} />
      <GitCard {...testData[1]} />
    </div>
  );
};

export default GitCardList;
