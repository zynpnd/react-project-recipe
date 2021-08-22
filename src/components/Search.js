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
            required
          />
          <button className="searchSubmit" type="submit">
          <i class="fas fa-search"></i>
          </button>

        </form>
      </div>
    </div>
  );
};

export default Search;
