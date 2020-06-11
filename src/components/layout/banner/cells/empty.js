import React, { useState } from 'react';

import { GridCellEmpty } from './cellStyles';

const CellEmpty = () => {
  const [colorNumber, setColorNumber] = useState(0);
  const handleClickCell = () => {
    setColorNumber(prevState => {
      if (prevState === 5) {
        return 0;
      }
      return prevState + 1;
    });
  };
  const handleKeyDown = event => {
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
      onFocus={handleKeyDown}
      tabIndex={0}
    />
  );
};

export default CellEmpty;
