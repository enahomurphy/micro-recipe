# Recipe Service
The recipe service contains and holds all endpoints related to managing and creating recipes. Below is a list of all recorded endpoints and their  HTTP verbs

## Service Features
1. **CATEGORIES**
    * Crud operation for recipe categories
2. **RECIPES**
    * Crud operation for recipes
3. **INGREDIENTS**
    * Crud operation for ingredients
    
### Technologies
 1. Nodejs 8
 2. mongoDB
 3. Express
 4. Mongoose ODM
 5. Docker

### Below are the API endpoints and their functions
A full detailed documentaation of All APi endpoints and their responses can be found in the raml file.
verbs | endpoints | description
-- | -- | --
GET | /recipes | Get all recipes
POST | /recipes | Creates new recipe
PATCH | /recipes/<id> | Updates a recipe
DELETE | /recipes/<id> | Deletes a recipe
GET | /recipes/<id> | Gets a single recipe
|  |
GET | /categories | Gets all categories
POST | /categories | Creates a new category
PATCH | /categories/<id> | Updates a category
DELETE | /categories/<id> | Deletes a category
GET | /categories/<id> | Gets a single category
GET | /categories/<id>/recipes | Gets all recipe that belongs to a category
GET | /categories?q={query} | Searches for categories
GET | /categories?limit={limit} | Limits categories
GET | /categories?page={page} | paginates categories
  |   |  
GET | /recipes/<id>/ingredients | Gets all ingredients related to recipe
GET | /recipe/<id>/ingredients | Gets all ingredients
POST | /recipe/<id>/ingredients | Creates new ingredients
PATCH | /ingredients/<id> | Updates an ingredient
DELETE | /ingredients/<id> | Deletes an ingredient
GET | /ingredients/<id> | Gets a single ingredient
GET | /recipe/<id>/ingredients?q={query} | Searches for ingredients
GET | /recipe/<id>/ingredients?limit={limit} | limits search result
GET | /recipe/<id>/ingredients?page={page} | paginates result set

### How to use
 - Clone repository 
- Cd into the recipe folder
- create a .env file for the .env.sample file
- Add your DB_URL and NODE_ENV
- run "npm start"
- make your API calls to localhost:8080/api/v1/recipes

### How to Contribute
- Fork repo to your branch
- Clone the repo
- Add a feature and raise a PR to  the base branch
- PR is reviewed and merged 