const Search = (props) => {
  const { search, onInputChange, getSearch } = props;
  return (
    <div className="container">
      <div className="row">
        <form className="searchForm" onSubmit={getSearch}>
          <input
            className="searchInput"
            type="text"
            placeholder="search"
            value={search}
            onChange={onInputChange}
          />
          <input className="searchSubmit" type="submit" value="Search" />
        </form>
      </div>
    </div>
  );
};

export default Search;
