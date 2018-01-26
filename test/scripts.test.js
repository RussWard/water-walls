const {
  calculateCapacity,
  isWell,
  findEnd,
  waterWalls
} = require('../scripts');

describe('water-wells', () => {
  describe('isWell', () => {
    it('returns true is the given values do make a well', () => {
      let current = 5;
      let validWell = [3, 4, 5];
      expect(isWell(current, validWell)).toBe(true);
    });
    it('returns false if the given values do not make a well', () => {
      let current = 5;
      let invalidWell = [4, 3, 2];
      expect(isWell(current, invalidWell)).toBe(false); 
    });
  });
  describe('findEnd', () => {
    it('returns the 1 index value of the end of a valid well', () => {
      let current = 5;
      let validWell = [3, 4, 5];
      expect(findEnd(current, validWell)).toBe(3);
    });
  });
  describe('calculateCapacity', () => {
    it('returns the water capacity of a valid well', () => {
      let current = 5;
      let validWell = [3, 4, 5];
      let expected = 3;
      expect(calculateCapacity(current, validWell)).toBe(expected);
    })
  })
})