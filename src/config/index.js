const config = {
    port: process.env.PORT || 2023,
    spoonacular: {
        baseUrl: 'https://api.spoonacular.com',
        apiKey: process.env.SPOONACULAR_KEY
    }
};

export default config;