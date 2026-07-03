import { Router } from 'express';
import { getMealPlan, getMealPlanWithTags } from '../controllers/mealplan.controller.js';

const router = Router();

router.get("/random", getMealPlan);

router.get("/:tags", getMealPlanWithTags);

export { router as mealplanRouter };