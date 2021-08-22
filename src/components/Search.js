const Search = (props) => {
  const { search, handleChange, handleSubmit } = props;
  return (
    <div className="container">
      <div className="row">
        <form  onSubmit={handleSubmit} className="searchForm" >
          <input
            className="searchInput"
            type="text"
            placeholder="search"
            value={search}
            onChange={handleChange}
          />
          <button className="searchSubmit" type="submit">
            Search
          </button>

        </form>
      </div>
    </div>
  );
};

export default Search;
