import { Link } from "react-router-dom";
const RecipeList = (props) => {
  const { recipes } = props;
  return (
    <div className="container py-5">
      {/* title */}
      <div className="row">
        <div className="col-10 mx-auto col-md-6 text-center  mb-3">
          <h1 className="text-slanted">Recipe List</h1>
        </div>
      </div>
      {recipes.map((recipe) => (
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div class="row">
            <div class="col s10 m6">
              <div class="card ">
                <div class="card-image">
                  <img src={recipe.recipe.image} />
                  <span class="card-title text-capitalize black">
                    {recipe.recipe.label}
                  </span>
                  <a class="btn-floating halfway-fab waves-effect waves-light red">
                    <i class="material-icons">add</i>
                  </a>
                </div>
                <div>
                  <br />
                </div>
                <div class="card-content activator  text-slanted ">
                  <span>
                    Provided By {recipe.recipe.source}
                    <i className="material-icons right">more_vert</i>
                  </span>
                </div>
                <div class="card-action">
                  <Link to={`/recipes`} className=" text-capitalize">
                    {recipe.recipe.label} details
                  </Link>
                  <a
                    href={recipe.recipe.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" mx-2 text-capitalize"
                  >
                    Url
                  </a>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-slanted text-capitalize">
                    {recipe.recipe.label}
                    <i className="material-icons right">close</i>
                  </span>
                  <ul class="collection">
                    {recipe.recipe.ingredients.map((ingredient) => (
                      <li className="collection-item avatar">
                        <img src={ingredient.image} class="circle" />
                        <span className="title">{ingredient.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
