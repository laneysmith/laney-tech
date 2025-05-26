import React from 'react';

import { GridCellFilled, type ColorNumber } from './SharedStyles';

const CellFilled: React.FC = () => {
  const randomNum = (Math.floor(Math.random() * 5) + 1) as ColorNumber;
  return <GridCellFilled colorNumber={randomNum} />;
};

export default CellFilled;
