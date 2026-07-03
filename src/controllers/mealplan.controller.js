import { generateMealPlan, getMealPlanByTags as fetchMealPlanByTags } from '../services/mealplan.service.js';
import { logger } from '../config/logger.js';

/**
 * generates a random meal plan
 */
export const getMealPlan = async (req, res) => {
    try {

        logger.info('Generating a random meal plan');
        const mealPlan = await generateMealPlan();
        res.json({ success: true, data: mealPlan });
    } catch (error) {
        logger.error(`Error generating meal plan: ${error.message}`);
        res.status(500).json({ success: false, error: error.message });
    }
};

/**
 * generates a meal plan by given tags
 */
export const getMealPlanWithTags = async (req, res) => {
    try {
        const { cuisine, diet, meal, intolerances, targetCalories } = req.query;

        logger.info('Generating a meal plan by tags');
        const mealPlan = await fetchMealPlanByTags(cuisine, diet, meal, intolerances, targetCalories);
        res.json({ success: true, data: mealPlan });
    } catch (error) {
        logger.error(`Error generating meal plan by tags: ${error.message}`);
        res.status(500).json({ success: false, error: error.message });
    }
}
