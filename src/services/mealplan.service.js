import config from '../config/index.js';
import { tagMangerForMealPlan } from '../utils/tagManager.js';

export const generateMealPlan = async () => {
    const { baseUrl, apiKey } = config.spoonacular;
    const url = `${baseUrl}/mealplanner/generate?&apiKey=${apiKey}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Spoonacular API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
};


export const getMealPlanByTags = async (cuisine, diet, meal, intolerances, targetCalories) => {
    const { baseUrl, apiKey } = config.spoonacular;
    const tags = tagMangerForMealPlan(targetCalories, diet, intolerances);
    const url = `${baseUrl}/mealplanner/generate?timeFrame=week${tags}&apiKey=${apiKey}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Spoonacular API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
};
    
    

