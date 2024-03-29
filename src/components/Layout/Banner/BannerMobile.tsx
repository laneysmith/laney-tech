import React from 'react';

import CellEmpty from './Cells/Empty';
import CellFilled from './Cells/Filled';
import EmptyColumn from './EmptyColumn';

const BannerMobile: React.FC = () => {
  return (
    <>
      <EmptyColumn />

      {/* START L  */}
      <CellEmpty />
      <CellFilled />
      <CellFilled />
      <CellFilled />
      <CellFilled />
      <CellFilled />
      <CellEmpty />

      <CellEmpty />
      <CellEmpty />
      <CellEmpty />
      <CellEmpty />
      <CellEmpty />
      <CellFilled />
      <CellEmpty />

      <CellEmpty />
      <CellEmpty />
      <CellEmpty />
      <CellEmpty />
      <CellEmpty />
      <CellFilled />
      <CellEmpty />
      {/* END L  */}

      <EmptyColumn />

      {/* START A */}
      <CellEmpty />
      <CellEmpty />
      <CellFilled />
      <CellFilled />
      <CellFilled />
      <CellFilled />
      <CellEmpty />

      <CellEmpty />
      <CellFilled />
      <CellEmpty />
      <CellEmpty />
      <CellFilled />
      <CellEmpty />
      <CellEmpty />

      <CellEmpty />
      <CellEmpty />
      <CellFilled />
      <CellFilled />
      <CellFilled />
      <CellFilled />
      <CellEmpty />
      {/* END A */}

      <EmptyColumn />

      {/* START N */}
      <CellEmpty />
      <CellFilled />
      <CellFilled />
      <CellFilled />
      <CellFilled />
      <CellFilled />
      <CellEmpty />

      <CellEmpty />
      <CellFilled />
      <CellEmpty />
      <CellEmpty />
      <CellEmpty />
      <CellEmpty />
      <CellEmpty />

      <CellEmpty />
      <CellFilled />
      <CellFilled />
      <CellFilled />
      <CellFilled />
      <CellFilled />
      <CellEmpty />
      {/* END N */}

      <EmptyColumn />

      {/* START E */}
      <CellEmpty />
      <CellFilled />
      <CellFilled />
      <CellFilled />
      <CellFilled />
      <CellFilled />
      <CellEmpty />

      <CellEmpty />
      <CellFilled />
      <CellEmpty />
      <CellFilled />
      <CellEmpty />
      <CellFilled />
      <CellEmpty />

      <CellEmpty />
      <CellFilled />
      <CellEmpty />
      <CellFilled />
      <CellEmpty />
      <CellFilled />
      <CellEmpty />
      {/* END E */}

      <EmptyColumn />

      {/* START Y */}
      <CellEmpty />
      <CellFilled />
      <CellFilled />
      <CellFilled />
      <CellEmpty />
      <CellEmpty />
      <CellEmpty />

      <CellEmpty />
      <CellEmpty />
      <CellEmpty />
      <CellFilled />
      <CellFilled />
      <CellFilled />
      <CellEmpty />

      <CellEmpty />
      <CellFilled />
      <CellFilled />
      <CellFilled />
      <CellEmpty />
      <CellEmpty />
      <CellEmpty />
      {/* END Y */}

      <EmptyColumn />
    </>
  );
};

export default BannerMobile;
