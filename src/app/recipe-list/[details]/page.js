import RecipeDetailsItem from "@/components/recipe-details";

export async function fetchRecipeDetails(currentRecipeId)
{
    try{
        const apiResponse= await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`);
        const data = await apiResponse.json();
        return data;
    }
    catch(e)
    {
        throw new Error(e);
    }
}

export default async function RecipeDetails({params})
{
    const getRecipeDetails= await fetchRecipeDetails(params?.details);
    return (
        <div>
            <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />
        </div>
    );

} 