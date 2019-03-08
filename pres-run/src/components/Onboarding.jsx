import React from "react";

class OnBoard extends React.Component{
    render() {
        return (
            <div className="onboard">
                <h1>Need help figuring out who to vote for?</h1>
                <h3>Take the quiz</h3>
                <button onClick={this.props.toggle}>Start</button>
            </div>
        )
    }
}

export default OnBoard;