import React from 'react';
import './filtername.css'
;class FilterName extends React.Component {
  render() {
    return (
      <div className="search_container">
      <input
            className="search"
            name="search"
            type="text"
            onChange={this.props.handleFilterName}
            placeholder="Find a pokemon by name"
      />
      </div>
    );
  }
}

export default FilterName;