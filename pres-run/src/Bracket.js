import React from 'react';
import Box from './Box';
import {presidents} from './data/presidents';

class Bracket extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="column">
          <Box name={presidents[0].name}/>
          <Box name={presidents[1].name}/>
          <Box name={presidents[2].name}/>
          <Box name={presidents[3].name}/>
        </div>

        <div className="column">
          <Box name={""}/>
          <Box name={""}/>
        </div>

        <div className="column">
          <Box name={""}/>
          <Box name={""}/>
        </div>

        <div className="column">
          <Box name={""}/>
          <Box name={""}/>
        </div>

        <div className="column">
          <Box name={presidents[4].name}/>
          <Box name={presidents[5].name}/>
          <Box name={presidents[6].name}/>
          <Box name={presidents[7].name}/>
        </div>
      </div>
    );
  }
}

export default Bracket;