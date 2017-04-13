import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: ''
    };

    this.search = this.search.bind(this);
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
  }

  search(event) {
    event.preventDefault();
    const url = `http://www.google.com/search?q=${this.state.searchText}`;
    window.open(url, '_self');
  }

  handleUpdateInput(searchText) {
    this.setState({
      searchText
    });
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.search}>
          <AutoComplete
            searchText={this.state.searchText}
            onUpdateInput={this.handleUpdateInput}
            floatingLabelText="Google search"
            dataSource={[]}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default SearchBox;
