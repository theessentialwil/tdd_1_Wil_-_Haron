/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
const { assert } = require('chai');
// eslint-disable-next-line no-unused-vars
const R = require('../multiply');

// eslint-disable-next-line no-undef
describe('My very first test-first assignment for number multiplication unit', () => {
  
  it('check that unit returns product of two number', () => {
    assert.Equal(multiply(1, 1), 1);
  });
});
