import React from 'react';

import { GridCellFilled } from './SharedStyles';

const CellFilled: React.FC = () => {
  const randomNum = Math.floor(Math.random() * 5) + 1;
  return <GridCellFilled colorNumber={randomNum} />;
};

export default CellFilled;
