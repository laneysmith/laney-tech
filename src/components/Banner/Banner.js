import React, { useRef } from 'react';
import useResizeObserver from 'use-resize-observer';

import EmptyColumn from './EmptyColumn';
import BannerFancy from './BannerFancy';
import BannerMobile from './BannerMobile';
import { BannerContainer, BannerGrid } from '../styles/BannerStyles';

const FANCY_BANNER_COLS = 34;
const MOBILE_BANNER_COLS = 21;

const Banner = () => {
  const containerRef = useRef();
  const { width = 800 } = useResizeObserver({ ref: containerRef });

  const useFancyBanner = width > 508;
  const columnsFilled = useFancyBanner ? FANCY_BANNER_COLS : MOBILE_BANNER_COLS;
  const numberOfColumns = Math.floor(width / 15) - columnsFilled;
  const trailingEmptyColumns =
    numberOfColumns > 0
      ? [...Array(numberOfColumns)].map((num, index) => <EmptyColumn key={index} />)
      : null;

  return (
    <BannerContainer ref={containerRef}>
      <BannerGrid>
        {useFancyBanner ? <BannerFancy /> : <BannerMobile />}
        {trailingEmptyColumns}
      </BannerGrid>
    </BannerContainer>
  );
};

export default Banner;
