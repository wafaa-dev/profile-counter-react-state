import React from "react";

class Counter extends React.Component {
  constructor() {
  
    super();
    this.state = {
      counter: 0,
      timer: 0,
       intervall: null
    };
  }

  componentDidMount() {

    this.setState({
      intervall: setInterval(
        () => this.setState({ timer: this.state.timer + 1 }),
        1000
      )
    });
  }


  render() {
  
    return (
      <div>
        <h2>COUNTER </h2>
       
        <p>{this.state.timer}</p>
      </div>
    );
  }
}

export default Counter ;
