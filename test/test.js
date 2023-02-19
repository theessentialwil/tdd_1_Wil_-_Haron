/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
const { assert } = require('chai');
// eslint-disable-next-line no-unused-vars
const multiply = require('../multiply');

// eslint-disable-next-line no-undef
describe('My very first test-first assignment for number multiplication unit', () => {
  
  // Test First TDD Cycle 1
  it('check that unit returns product of two number', () => {
    assert.equal(multiply(1, 1), 1);
  });

  // Test First TDD Cycle 2
  it('check that unit returns product of two numbers 2 and 2', () => {
    assert.equal(multiply(2, 2), 4);
  })

  // Test First TDD Cycle 3
  it('check that unit returns product of 3 and 3', () => {
    assert.equal(multiply(3, 3), 9);
  })

  // Fourth Test Cycle
  it('check that unit returns product of two numbers', () => {
    assert.equal(multiply(4,4), 16);
  })
  
});
