import React from "react";

const SearchForm = props => {
 
  return (
    <section className="search-form">
      <form>
        <label>
          Search:
          <input
            type='text'
            name='filter'
            onChange={event => props.handleChange(event)}
          /> 
        </label>
      </form>
    </section>
  );
}

export default SearchForm;
