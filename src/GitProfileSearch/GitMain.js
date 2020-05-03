import React from "react";
import GitCardList from "./GitCardList";
import GitProfileSearch from "./GitProfileSearch";
import testData from "./TestData";

class GitMain extends React.Component {
  state = {
    profile: testData, //Same as the previous version with super()
  };
  addNewProfile = (newProfile) => {
    console.log(newProfile);
    this.setState((prevState) => ({
      profile: [...prevState.profile, newProfile],
    }));
  };
  render() {
    return (
      <div>
        <div className='git-card-main'>{this.props.titleName}</div>
        <GitProfileSearch onSubmit={this.addNewProfile} />
        <GitCardList profile={this.state.profile} />
      </div>
    );
  }
}

export default GitMain;
