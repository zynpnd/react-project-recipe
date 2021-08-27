import "./Search.css";

const Search = (props) => {
  const { search, handleChange, handleSubmit } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-5 text-center">
          <h1 className="text-slanted text-capitalize">
            Types of <strong className="text-orange">Recipes</strong>
          </h1>

          <form onSubmit={handleSubmit} className="searchForm">
            <input
              className="searchInput"
              type="text"
              placeholder="search"
              value={search}
              onChange={handleChange}
              required
            />
            <button className="searchSubmit " type="submit">
              <i class="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
