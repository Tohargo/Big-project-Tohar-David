import { fetchAllTags, getTagsByCategory as fetchTagsByCategory, searchRecipesFromAPI } from '../services/recipes.service.js';
import { logger } from '../config/logger.js';
import { tagManagerForRecipe } from '../utils/tagManager.js';

/**
 * get all local tags
 */
export const getTags = async (req, res) => {
    try {
        logger.info('Fetching all search tags from local data');
        const tags = fetchAllTags();
        res.json({ success: true, data: tags });
    } catch (error) {
        logger.error(`Error fetching tags: ${error.message}`);
        res.status(500).json({ success: false, error: error.message });
    }
};


/**
 * get local tags by given category
 */
export const getTagsByCategory = async (req, res) => {
    try {
        const category = req.params.category;

        logger.info(`Fetching tags in category: ${category}`);
        const tags = fetchTagsByCategory(category);

        res.json({ success: true, data: tags });
    } catch (error) {
        logger.error(`Error fetching tags by category: ${error.message}`);
        res.status(500).json({ success: false, error: error.message });
    }
};

/**
 * gets a recipe by specific tags that was given
 */
export const getRecipeByTagSearch = async (req, res) => {
    try {
        const { query } = req.query;
        const { cuisine, diet, meal, intolerances, targetCalories, protein } = req.query;

        if (!query) {
            return res.status(400).json({ success: false, error: 'Query parameter "query" is required' });
        }
        const tags = tagManagerForRecipe(cuisine, diet, meal, intolerances, targetCalories, protein);
        logger.info(`Searching recipes from Spoonacular API with query: "${query}"`);
        const results = await searchRecipesFromAPI(query,tags);
        res.json({ success: true, data: results });
    } catch (error) {
        logger.error(`Error searching recipes: ${error.message}`);
        res.status(500).json({ success: false, error: error.message });
    }
};
