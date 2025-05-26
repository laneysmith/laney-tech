import React, { useState } from 'react';

import { GridCellEmpty, type ColorNumber, getNextNumber } from './SharedStyles';

const CellEmpty: React.FC = () => {
  const [colorNumber, setColorNumber] = useState<ColorNumber>(0);
  const handleClickCell = (): void => {
    setColorNumber(prevState => getNextNumber(prevState + 1));
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      handleClickCell();
    }
  };

  return (
    <GridCellEmpty
      colorNumber={colorNumber}
      onClick={handleClickCell}
      onMouseOver={handleClickCell}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    />
  );
};

export default CellEmpty;
