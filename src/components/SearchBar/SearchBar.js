import { Component } from 'react';
import { Link } from 'react-router-dom';
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
    this.props.filterMovies(e.target.value.toLowerCase());
  };

  render() {
    return (
      <form>
        {/* <Link to="/search"> */}
          <input
            className="search-bar"
            aria-label="search bar"
            placeholder="Search"
            name="searchInput"
            value={this.state.searchInput}
            onChange={this.handleChange}
            autoComplete="off"
          />
        {/* </Link> */}
        {/* <Link to="/"> */}
          <button onClick={this.props.clearFilteredMovies}>
            clear
          </button>
        {/* </Link> */}
      </form>
    );
  }
}

export default SearchBar;
