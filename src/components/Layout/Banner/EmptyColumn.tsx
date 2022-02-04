import React from 'react';

import CellEmpty from './Cells/Empty';

const EmptyColumn: React.FC = () => (
  <>
    {[...Array(7)].map((_, index) => (
      <CellEmpty key={index} />
    ))}
  </>
);

export default EmptyColumn;
