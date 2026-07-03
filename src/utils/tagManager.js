
export const tagManagerForRecipe = (cuisine, diet, meal, intolerances, targetCalories, protein) => {
    let tagsForUrl = "";
    if (cuisine) {
        tagsForUrl += `&cuisine=${cuisine}`;
    }
    if (diet) {
        tagsForUrl += `&diet=${diet}`;
    }
    if (meal) {
        tagsForUrl += `&meal=${meal}`;
    }
    if (intolerances) {
        tagsForUrl += `&intolerances=${intolerances}`;
    }
    if (targetCalories) {
        tagsForUrl += `&maxCalories=${targetCalories}`;
    }
    if (protein) {
        tagsForUrl += `&minProtein=${protein}`;
    }
    return tagsForUrl;

}

export const tagMangerForMealPlan = (targetCalories, diet, intolerances) => {
    let tagsForUrl = "";
    if (targetCalories) {
        tagsForUrl += `&targetCalories=${targetCalories}`;
    }
    if (diet) {
        tagsForUrl += `&diet=${diet}`;
    }
    if (intolerances) {
        tagsForUrl += `&exclude=${intolerances}`;
    }
    return tagsForUrl;
}
    
