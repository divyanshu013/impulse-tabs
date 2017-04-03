import React from 'react';
import UnsplashSourceES6 from 'unsplash-source-es6';
import logo from '../../logo.svg';

// Components
import Clock from '../Clock';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      img: ''
    };
  }

  componentDidMount() {
    const unsplash = new UnsplashSourceES6();
    this.fetchImage(unsplash.search(['music']).fetch());
  }

  fetchImage(url) {
    fetch(url)
      .then(() => {
        this.setState({
          img: url
        });
      });
  }

  render() {
    const styles = {
      backgroundImage: `url('${this.state.img}')`,
      background: 'no-repeat center fixed',
      backgroundSize: 'cover'
    };

    // TODO: Remove unnecessary code when complete
    // TODO: Add image author credits
    return (
      <div className="App" style={styles}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Impulse Tabs</h2>
        </div>
        <p className="App-intro">
          Happy Hacking!
        </p>

        <Clock />
      </div>
    );
  }
}

export default Main;
