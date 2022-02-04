import calculateEmptyColumns from '../calculateEmptyColumns';

describe('calculateEmptyColumns', () => {
  it('should calculate correct # of empty columns needed to fill screen', () => {
    expect(calculateEmptyColumns(true, 755)).toBe(15);
    expect(calculateEmptyColumns(false, 400)).toBe(5);
  });
});
