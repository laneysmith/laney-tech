import React, { useRef } from 'react';
import useResizeObserver from 'use-resize-observer';

import EmptyColumn from './EmptyColumn';
import BannerFancy from './BannerFancy';
import BannerMobile from './BannerMobile';
import calculateEmptyColumns from './calculateEmptyColumns';
import { BannerContainer, BannerGrid } from '../styles/BannerStyles';

const Banner = () => {
  const fancyBannerRef = useRef(<BannerFancy />);
  const mobileBannerRef = useRef(<BannerMobile />);
  const { ref, width = 800 } = useResizeObserver();

  const useFancyBanner = width > 508;
  const bannerComponent = useFancyBanner ? fancyBannerRef.current : mobileBannerRef.current;
  const emptyColCount = calculateEmptyColumns(useFancyBanner, width);
  const trailingEmptyColumns =
    emptyColCount > 0
      ? [...Array(emptyColCount)].map((num, index) => <EmptyColumn key={index} />)
      : null;

  return (
    <BannerContainer ref={ref}>
      <BannerGrid>
        {bannerComponent}
        {trailingEmptyColumns}
      </BannerGrid>
    </BannerContainer>
  );
};

export default Banner;
