require('chai').should();

const Seed = require('../../seed');
require('../../server');


describe('Seed Class', () => {
  it('should throw an error when instantiated', () => {
    (() => new Seed()).should
      .throw(TypeError, 'Abstract class implement generate method');
  });
});
