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
    this.setState({ [e.target.name]: e.target.value });
    this.props.filterMovies(this.state.searchInput.toLowerCase());
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
          autoComplete="off"
        />
        <button onClick={() => this.props.clearFilteredMovies()}>clear</button>
      </form>
    );
  }
}

export default SearchBar;
