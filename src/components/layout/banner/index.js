import React, { useRef } from 'react';
import styled from 'styled-components';

import EmptyColumn from './emptyColumn';
import BannerDesktop from './bannerDesktop';
import BannerMobile from './bannerMobile';
import calculateEmptyColumns from './calculateEmptyColumns';
import useWindowDimensions from './useWindowWidth';
import { rhythm } from '../../../utils/typography';

const BannerContainer = styled.div`
  background-color: ${({ theme }) => theme.gridBackgroundColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${rhythm(0.5)} 0 ${rhythm(1)} 0;
  padding: ${rhythm(0.5)};

  @media only screen and (max-width: 600px) {
    padding: ${rhythm(0.5)} 0;
    border-top: 1px solid ${({ theme }) => theme.borderColor};
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    border-left: 0;
    border-right: 0;
    border-radius: 0;
  }
`;

const BannerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 12px);
  grid-template-rows: repeat(7, 12px);
  grid-column-gap: 3px;
  grid-row-gap: 3px;
  grid-auto-flow: column;
`;

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
