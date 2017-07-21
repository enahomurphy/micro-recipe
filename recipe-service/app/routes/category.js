module.exports = router => {
  router.get('/categories', () => {})
    .get('/categories/:id', () => {})
    .get('/categories/:id/recipes', () => {})
    .post('/categories', () => {})
    .patch('/categories/:id', () => {})
    .delete('/categories/:id', () => {});
  return router;
};
