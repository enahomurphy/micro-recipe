module.exports = router => {
  router.get('/ingredient', () => {})
    .get('/ingredient/:id', () => {})
    .get('/recipes/:recipeId/ingredients', () => {})
    .post('/recipes/:recipeId/ingredients', () => {})
    .patch('/ingredients/:id', () => {})
    .delete('/ingredients/:id', () => {});
  return router;
};
