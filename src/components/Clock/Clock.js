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
    const styles = {
      backgroundColor: '#ffde00',
      display: 'inline-block',
      fontFamily: 'monospace',
      textAlign: 'center',
      top: 5,
      right: 5,
      position: 'absolute'
    };

    return (
      <div style={styles}>
        <h1>{this.state.date.toTimeString()}</h1>
      </div>
    );
  }
}

export default Clock;
