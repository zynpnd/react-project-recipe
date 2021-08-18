const Search = (props) => {
  const { search, onInputChange, getSearch } = props;
  return (
    <form onSubmit={getSearch}>
      <input
        type="text"
        className="form-control"
        placeholder="search"
        value={search}
        onChange={onInputChange}
      />
      <button>Search</button>
    </form>
  );
};

export default Search;
