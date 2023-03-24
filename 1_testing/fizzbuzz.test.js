const fizzBuzz = require('../../PhaseOne/fizzBuzz.js');

describe('fizzBuzz', () => {
  it('takes 3 and outputs "Fizz"', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  })

  it('takes 5 and outputs "Buzz"', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  })

  it('takes 8 and returns 8', () => {
    expect(fizzBuzz(8)).toBe(8);
  })

  it('takes 15 and returns "FizzBuzz"', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  })

  it('takes 18 and returns "Fizz"', () => {
    expect(fizzBuzz(18)).toBe('Fizz');
  })

  it('takes 20 and returns "Buzz"', () => {
    expect(fizzBuzz(20)).toBe('Buzz');
  })
});