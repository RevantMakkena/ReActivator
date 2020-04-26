import React from "react";
import GitCard from "./GitCard";
import GitCardList from "./GitCardList";
import GitProfileSearch from "./GitProfileSearch";
import testData from "./TestData";

class GitMain extends React.Component {
  state = {
    profile: testData, //Same as the previous version with super()
  };
  render() {
    return (
      <div>
        <div className='git-card-main'>{this.props.titleName}</div>
        <GitProfileSearch />
        <GitCardList profile={this.state.profile} />
      </div>
    );
  }
}

export default GitMain;
