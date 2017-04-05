import React from 'react';

class SearchBox extends React.Component {
  search(event) {
    event.preventDefault();
    let url = 'http://www.google.com/search?q=' + this.refs.search.value;
    window.open(url, '_self');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.search.bind(this)}>
          <input type="search" ref="search" placeholder="Search" />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default SearchBox;
