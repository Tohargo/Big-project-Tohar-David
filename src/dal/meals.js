// Local data store for search tags (simulates a database)
const tags = [
    // Cuisine Types
    { id: 1, name: "italian", displayName: "Italian", category: "cuisine" },
    { id: 2, name: "mexican", displayName: "Mexican", category: "cuisine" },
    { id: 3, name: "chinese", displayName: "Chinese", category: "cuisine" },
    { id: 4, name: "indian", displayName: "Indian", category: "cuisine" },
    { id: 5, name: "french", displayName: "French", category: "cuisine" },
    { id: 6, name: "thai", displayName: "Thai", category: "cuisine" },

    // Diet Preferences
    { id: 7, name: "vegetarian", displayName: "Vegetarian", category: "diet" },
    { id: 8, name: "vegan", displayName: "Vegan", category: "diet" },
    { id: 9, name: "keto", displayName: "Keto", category: "diet" },
    { id: 10, name: "paleo", displayName: "Paleo", category: "diet" },
    { id: 11, name: "gluten-free", displayName: "Gluten Free", category: "diet" },
    { id: 12, name: "dairy-free", displayName: "Dairy Free", category: "diet" },

    // Meal Types
    { id: 13, name: "breakfast", displayName: "Breakfast", category: "meal" },
    { id: 14, name: "lunch", displayName: "Lunch", category: "meal" },
    { id: 15, name: "dinner", displayName: "Dinner", category: "meal" },
    { id: 16, name: "snack", displayName: "Snack", category: "meal" },
    { id: 17, name: "dessert", displayName: "Dessert", category: "meal" },
    { id: 18, name: "appetizer", displayName: "Appetizer", category: "meal" },

    // Intolerances
    { id: 19, name: "gluten", displayName: "Gluten", category: "intolerance" },
    { id: 20, name: "dairy", displayName: "Dairy", category: "intolerance" },
    { id: 21, name: "peanut", displayName: "Peanut", category: "intolerance" },
    { id: 22, name: "soy", displayName: "Soy", category: "intolerance" },
    { id: 23, name: "egg", displayName: "Egg", category: "intolerance" },
    { id: 24, name: "shellfish", displayName: "Shellfish", category: "intolerance" },
    { id: 25, name: "tree-nut", displayName: "Tree Nut", category: "intolerance" },
    { id: 26, name: "fish", displayName: "Fish", category: "intolerance" },


];

/**
 * Returns all search tags
 */
export const getAllTags = () => {
    return tags;
};



/**
 * Returns all tags by category
 * @param {string} category - The category
 * @returns {Array<object>} Array of tag objects
 */
export const getTagsByCategory = (category) => {
    return tags.filter(tag => tag.category === category);
};