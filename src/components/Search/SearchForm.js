import { useState } from "react";

function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState(props.term);

  const onSubmit = (event) => {
    event.preventDefault();
    props.updateSearchTerm(searchTerm);
  };

  const updateSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="search_form_container">
      <form id="gif_search_form" name="gif_search_form" onSubmit={onSubmit}>
        <label htmlFor="search_gif">
          <input
            type="text"
            id="search_gif"
            name="search_gif"
            placeholder="Enter a search term"
            value={searchTerm}
            onChange={updateSearchTerm}
            required
          />
        </label>
        <button className="btn_green" type="submit">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
