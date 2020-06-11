import React from 'react';

import { GridCellFilled } from './cellStyles';

const CellFilled = () => {
  const randomNum = Math.floor(Math.random() * 5) + 1;
  return <GridCellFilled randomNumber={randomNum} />;
};

export default CellFilled;
