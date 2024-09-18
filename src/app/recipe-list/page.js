import RecipeList from "@/components/recipe-list";

async function fetchListOfRecipes() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/recipes");
    const data = await apiResponse.json();
    return data.recipes;
  } catch (e) {
    throw new Error(e);
  }
}

export default async function Recipes() {
  const recipeList = await fetchListOfRecipes();
  //console.log(recipeList);

  return (
    <RecipeList recipeList={recipeList} />
    /*{
     <div>
    <ul>
    {recipeList && recipeList.length > 0 ?
    recipeList.map((recipe)=>
    <li>
      {recipe.name}
      <p>Recipe list</p>
    </li>
    ):null}
  </ul>
  </div>
      }
*/
  );
}
