import React from "react";
import GitCard from "./GitCard";
import GitCardList from "./GitCardList";
import GitProfileSearch from "./GitProfileSearch";
import testData from "./TestData";

class GitMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: testData,
    };
  }
  render() {
    return (
      <div>
        <div className='git-card-main'>{this.props.titleName}</div>
        <GitProfileSearch />
        <GitCardList profile={this.state.profiles} />
      </div>
    );
  }
}

export default GitMain;
