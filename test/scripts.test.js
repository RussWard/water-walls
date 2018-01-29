const {
  addWater,
  calculateCapacity,
  isWell,
  findEnd,
  findLargestWell
} = require('../scripts');

describe('water-wells', () => {
  describe('isWell', () => {
    it('returns true is the given values do make a well', () => {
      //let validWell = [3, 4, 5];
      let validWell = [2, 6, 4, 5, 9, 1, 2];
      expect(isWell(validWell)).toBe(true);
    });
    it('returns false if the given values do not make a well', () => {
      let invalidWell = [4, 3, 2];
      expect(isWell(invalidWell)).toBe(false); 
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
    });
  });
  describe('findLargestWell', () => {
    it('returns the correct values for a given walls array', () => {
      let walls = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2];
      //let walls = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2, 1, 9];
      let expected = [3, 8, 11];
      //let expected = [8, 12, 23]
      expect(findLargestWell(walls)).toEqual(expected);
    });
    it('returns an error in string form if no well is found', () => {
      let walls = [1, 2, 3, 4, 4, 4, 3, 2, 1];
      let expected = 'no wells found';
      expect(findLargestWell(walls)).toEqual(expected);
    });
  });
  describe('addWater', () => {
    it('returns an array of objects', () => {
      let walls = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2];
      let largestWell = findLargestWell(walls);
      let wellsWithWater = addWater(walls, largestWell);
      expect(Array.isArray(wellsWithWater)).toBe(true);
      expect(typeof wellsWithWater[0]).toBe('object');
    });
    it('adds the correct amount of water for a column', () => {
      let walls = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2];
      let largestWell = findLargestWell(walls);
      let wellsWithWater = addWater(walls, largestWell);
      let result = wellsWithWater[1].water;
      let expected = 2;
      expect(result).toBe(expected);
    });
    it('adds a flag to the edges of the largest well', () => {
      let walls = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2];
      let largestWell = findLargestWell(walls);
      let wellsWithWater = addWater(walls, largestWell);
      let startLargest = wellsWithWater[2].largest;
      let endLargest = wellsWithWater[7].largest;
      let result = startLargest && endLargest;
      expect(result).toBe(true);
    })
  });
})