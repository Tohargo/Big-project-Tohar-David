import { getAllTags, getTagsByCategory as fetchTagsByCategory } from '../dal/meals.js';
import config from '../config/index.js';


/**
 * Get all search tags from local DAL
 */
export const fetchAllTags = () => {
    return getAllTags();
};

/**
 * Get tags filtered by category from local DAL
 */
export const getTagsByCategory = (category) => {
    return fetchTagsByCategory(category);
};

/**
 * Search recipes using the Spoonacular external API with the given tags
 */
export const searchRecipesFromAPI = async (query, tags) => {
    const { baseUrl, apiKey } = config.spoonacular;
    const url = `${baseUrl}/recipes/complexSearch?query=${encodeURIComponent(query)}${tags}&number=5&apiKey=${apiKey}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Spoonacular API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
};
