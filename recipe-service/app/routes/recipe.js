module.exports = router => {
  router.get('/recipes', (req, res) => { res.send(' get all'); })
    .get('/recipes/:id', () => {})
    .get('/categories/:id/recipes', () => {})
    .post('/recipes', () => {})
    .patch('/recipes/:id', () => {})
    .delete('/recipes/:id', () => {});
  return router;
};
