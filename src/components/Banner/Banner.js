import React, { useRef } from 'react';

import EmptyColumn from './EmptyColumn';
import BannerDesktop from './BannerDesktop';
import BannerMobile from './BannerMobile';
import calculateEmptyColumns from './calculateEmptyColumns';
import useWindowDimensions from './useWindowWidth';
import { BannerContainer, BannerGrid } from '../styles/BannerStyles';

const BANNER_CONTAINER_BREAKPOINT = 600;
const BANNER_BREAKPOINT = 532;
const DESKTOP_BODY_MARGIN = 14;
const DESKTOP_BANNER_CONTAINER_PADDING = 16;
const DESKTOP_SPACING = DESKTOP_BODY_MARGIN * 2 + DESKTOP_BANNER_CONTAINER_PADDING * 2;

const Banner = () => {
  const bannerContainerRef = useRef();
  const desktopBannerRef = useRef(<BannerDesktop />);
  const mobileBannerRef = useRef(<BannerMobile />);
  const { width } = useWindowDimensions();

  const bannerContainerContentWidth =
    width <= BANNER_CONTAINER_BREAKPOINT ? width : width - DESKTOP_SPACING;
  const useDesktopBanner = width >= BANNER_BREAKPOINT;
  const banner = useDesktopBanner ? desktopBannerRef : mobileBannerRef;
  const emptyColCount = calculateEmptyColumns(useDesktopBanner, bannerContainerContentWidth);
  const trailingEmptyColumns =
    emptyColCount > 0
      ? [...Array(emptyColCount)].map((num, index) => <EmptyColumn key={index} />)
      : null;

  return (
    <BannerContainer ref={bannerContainerRef}>
      <BannerGrid>
        {banner.current}
        {trailingEmptyColumns}
      </BannerGrid>
    </BannerContainer>
  );
};

export default Banner;
