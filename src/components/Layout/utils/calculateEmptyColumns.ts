import { FANCY_BANNER_COLS, MOBILE_BANNER_COLS, GRID_CELL_SIZE, GRID_GAP } from '../../constants';

const calculateEmptyColumns = (useFancyBanner: boolean, parentContainerWidth: number): number => {
  const filledColCount = useFancyBanner ? FANCY_BANNER_COLS : MOBILE_BANNER_COLS;
  const maxColumnsPossible = Math.floor(
    (parentContainerWidth + GRID_GAP) / (GRID_CELL_SIZE + GRID_GAP)
  );
  const emptyColCount = maxColumnsPossible - filledColCount;
  return emptyColCount;
};

export default calculateEmptyColumns;
