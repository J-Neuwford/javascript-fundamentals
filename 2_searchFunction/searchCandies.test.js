const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
  it('returns candies starting with "Ma" that cost less than 10', () => {
    expect(searchCandies('Ma', 10)).toStrictEqual(['Mars', 'Maltesers']);
  })

  it('returns candies starting with "Ma" that cost less than 2', () => {
    expect(searchCandies('Ma', 2)).toStrictEqual (['Mars']);
  })

  it('returns candies starting with "S" that cost less than 10', () => {
    expect(searchCandies('S', 10)).toStrictEqual (['Skitties', 'Skittles', 'Starburst']);
  })

  it('returns candies starting with "S" that cost less than 4', () => {
    expect(searchCandies('S', 4)).toStrictEqual (['Skitties', 'Skittles']);
  })

  it('returns candies starting with "ma" that cost less than 10', () => {
    expect(searchCandies('ma', 10)).toStrictEqual(['Mars', 'Maltesers']);
  })
});