import Link from "next/link";

export default function RecipeDetailsItem({ getRecipeDetails }) {
  return (
    <div>
        <Link className="text-blue-500 font-extrabold m-6" href={'/recipe-list'}>Go to recipe lists</Link>
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10 ">
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            <img
              src={getRecipeDetails?.image}
              name={getRecipeDetails?.name}
              className="w-4/5 rounded object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-950">
              {getRecipeDetails?.name}
            </h2>
            <div className="flex flex-wrap gap-4 mt-5 ">
              <p className="text-2xl text-gray-700">
                {getRecipeDetails?.mealType[0]}
              </p>
            </div>
            <div className="mt-5">
              <p className="text-xl text-gray-800">
                {getRecipeDetails?.cuisine}
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-bold text-gray-700">Ingrediants</h3>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
                {getRecipeDetails?.ingredients.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
