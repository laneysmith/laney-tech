import calculateEmptyColumns from '../calculateEmptyColumns';

describe('calculateEmptyColumns', () => {
  it('should match snapshot', () => {
    expect(calculateEmptyColumns(true, 755)).toBe(16);
    expect(calculateEmptyColumns(false, 400)).toBe(5);
  });
});
