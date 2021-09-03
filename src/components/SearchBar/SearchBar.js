import { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form>
        <input
          aria-label="search bar"
          placeholder="Search"
          name="searchInput"
          value={this.state.searchInput}
          onChange={(e) => this.handleChange(e)}
        />
      </form>
    );
  }
}

export default SearchBar;
