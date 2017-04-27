import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    };
  }

  // Lifecycle hooks
  // when component is mounted
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  // when component is unmounted
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="clock">
        <h1>{this.state.date.getHours()}:{this.state.date.getMinutes()}</h1>
      </div>
    );
  }
}

export default Clock;
