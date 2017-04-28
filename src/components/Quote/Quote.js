import React from 'react';

class Quote extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: 'Hey guys!'
    };
  }

  componentDidMount() {
    const url = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';
    this.fetchQuote(url);
  }

  fetchQuote(url) {
    fetch(url, {
      method: 'GET',
      mode: 'no-cors'
    })
    .then((response) => (response))
    .then((data) => {
      console.log(data);
    });
  }

  render() {
    return (
      <div className="quote">
        <h3>"This is something amazing and awesome to motivate you through the day!</h3>
        <h4>Divyanshu</h4>
      </div>
    );
  }
}

export default Quote;
