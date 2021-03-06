import { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    };
  }

  handleChange = (e) => {
    this.setState({ searchInput: e.target.value });
    this.props.filterMovies(e.target.value.toLowerCase());
  };

  clearSearchInput = () => {
    this.setState({ searchInput: '' });
    this.props.clearFilteredMovies();
  };

  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="search-bar"
          aria-label="search bar"
          placeholder="Search..."
          name="searchInput"
          value={this.state.searchInput}
          onChange={this.handleChange}
          autoComplete="off"
        />
        <button
          className="clear-btn"
          type="submit"
          onClick={this.clearSearchInput}
        >
          clear
        </button>
      </form>
    );
  }
}

export default SearchBar;
