import { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      searchInput = ''
    }
  }
  render() {
    return (
      <form>
        <input aria-label="search bar" placeholder="Search" name="searchInput" value={this.state.searchInput}/>
      </form>
    );
  }
}

export default SearchBar;
