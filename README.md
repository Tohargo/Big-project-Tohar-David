# Tohar Gosalker - 330937673 & David Netanel Bram - 217335835

# Recipe & Meal Plan API

 Node project browsing recipes and generating meal plans using Spoonacular API.

## About

This project provides endpoints to:
- Find search tags from our server
- Search recipes via Spoonacular API
- Generate meal plans based on preferences or randomize it

## Sample URLs

- Get all recipes: `http://localhost:2023/api/recipes/tags`
- Get recipe by category: `http://localhost:2023/api/recipes/diet`
- Search recipes: `http://localhost:2023/api/recipes/search?query=pasta&diet=vegan`
- Generate meal plan: `http://localhost:2023/api/mealplan/custom?diet=vegan&targetCalories=2000&intolerances=gluten`
