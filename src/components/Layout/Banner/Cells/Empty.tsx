import React, { useState } from 'react';

import { GridCellEmpty } from './SharedStyles';

const CellEmpty: React.FC = () => {
  const [colorNumber, setColorNumber] = useState(0);
  const handleClickCell = (): void => {
    setColorNumber(prevState => {
      if (prevState === 5) {
        return 0;
      }
      return prevState + 1;
    });
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
      tabIndex={0}
    />
  );
};

export default CellEmpty;
