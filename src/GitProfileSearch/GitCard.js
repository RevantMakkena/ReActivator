import React from "react";
import testData from "./TestData";

class GitCard extends React.Component {
  render() {
    const currData = testData[0];
    return (
      <div className='github-profile'>
        <img src='https://placehold.it/75' alt='Img here' />
        <div className='info'>
          <div className='name'>{this.props.name}</div>
          <div className='company'>{this.props.company}</div>
        </div>
      </div>
    );
  }
}

export default GitCard;
