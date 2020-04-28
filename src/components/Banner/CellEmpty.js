import React, { useState } from 'react';

import { GridCellEmpty } from '../styles/BannerStyles';

const CellEmpty = () => {
  const [index, setIndex] = useState(0);
  const statuses = [0, 1, 2, 3, 4, 5];
  const handleClickCell = () => {
    setIndex((prevState) => {
      if (prevState === 5) {
        return 0;
      }
      return prevState + 1;
    });
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleClickCell();
    }
  };

  return (
    <GridCellEmpty
      colorIndex={index}
      className={`commit commit--interactive commit--${statuses[index]}`}
      onClick={handleClickCell}
      onMouseOver={handleClickCell}
      onKeyDown={handleKeyDown}
      onFocus={handleKeyDown}
      tabIndex={0}
    />
  );
};

export default CellEmpty;
