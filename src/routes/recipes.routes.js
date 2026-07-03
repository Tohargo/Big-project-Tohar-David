import { Router } from "express";
import { getTags, getTagsByCategory, getRecipeByTagSearch } from "../controllers/recipes.controller.js";

const router = Router();

router.get("/tags", getTags);

router.get("/tags/category/:category", getTagsByCategory);

router.get("/search/", getRecipeByTagSearch);

export { router as recipesRouter };