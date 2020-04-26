import React from "react";
import GitCard from "./GitCard";
import GitCardList from "./GitCardList";

class GitMain extends React.Component {
  render() {
    return (
      <div>
        <div className='git-card-main'>{this.props.titleName}</div>
        <GitCardList />
      </div>
    );
  }
}

export default GitMain;
