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

  getFormatedMinutes() {
    return (
      this.state.date.getMinutes() < 10 ?
        `0${this.state.date.getMinutes()}` :
        this.state.date.getMinutes()
    );
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="clock">
        <h1>{this.state.date.getHours()}:{this.getFormatedMinutes()}</h1>
      </div>
    );
  }
}

export default Clock;
