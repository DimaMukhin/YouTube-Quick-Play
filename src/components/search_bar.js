import React, {Component} from 'react';

class SearchBar extends Component {
  // SearchBar constructor
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  // render method (called on every state change)
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    // always manipulate state with this.setState (informs react of state change)
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
