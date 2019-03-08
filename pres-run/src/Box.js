import React from 'react';

class Box extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        {name}
      </div>
    );
  }
}

export default Box;