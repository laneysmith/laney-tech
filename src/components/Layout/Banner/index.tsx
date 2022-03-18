import React, { useRef } from 'react';
import styled from 'styled-components';

import { rhythm } from '../../../utils/typography';
import { calculateEmptyColumns, useIsMounted, useWindowWidth } from '../utils';
import EmptyColumn from './EmptyColumn';
import BannerDesktop from './BannerDesktop';
import BannerMobile from './BannerMobile';

const CELL_SIZE = 12;
const CELL_GAP = 3;
const ROWS = 7;
const DESKTOP_BANNER_COLUMNS = 35;
const BANNER_HEIGHT = CELL_SIZE * 9 + CELL_GAP * (ROWS - 1);
const BANNER_CONTAINER_BREAKPOINT = 600;
const BANNER_BREAKPOINT = DESKTOP_BANNER_COLUMNS * (CELL_SIZE + CELL_GAP);
const DESKTOP_BODY_MARGIN = 13;
const DESKTOP_BANNER_CONTAINER_PADDING = 13;
const DESKTOP_SPACING = DESKTOP_BODY_MARGIN * 2 + DESKTOP_BANNER_CONTAINER_PADDING * 2;

const BannerContainer = styled.div`
  background-color: ${({ theme }) => theme.gridBackgroundColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${rhythm(0.5)} 0 ${rhythm(1)} 0;
  padding: ${CELL_SIZE}px;
  height: ${BANNER_HEIGHT}px;

  @media only screen and (max-width: ${BANNER_CONTAINER_BREAKPOINT}px) {
    padding: ${CELL_SIZE}px 0;
    border-top: 1px solid ${({ theme }) => theme.borderColor};
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    border-left: 0;
    border-right: 0;
    border-radius: 0;
  }
`;

const AccessibleHiddenHeading = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap; /* added line */
  border: 0;
`;

const BannerGrid = styled.div<{ $isHidden: boolean }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, ${CELL_SIZE}px);
  grid-template-rows: repeat(${ROWS}, ${CELL_SIZE}px);
  grid-column-gap: ${CELL_GAP}px;
  grid-row-gap: ${CELL_GAP}px;
  grid-auto-flow: column;
  opacity: ${({ $isHidden }) => ($isHidden ? 0 : 1)};
  transition: opacity 0.25s linear;
`;

const Banner: React.FC = () => {
  const desktopBannerRef = useRef(<BannerDesktop />);
  const mobileBannerRef = useRef(<BannerMobile />);
  const isMounted = useIsMounted();
  const { width } = useWindowWidth();
  let banner = null;
  let trailingEmptyColumns = null;

  if (isMounted) {
    const bannerContainerContentWidth =
      width <= BANNER_CONTAINER_BREAKPOINT ? width : width - DESKTOP_SPACING;
    const useDesktopBanner = width >= BANNER_BREAKPOINT;
    banner = useDesktopBanner ? desktopBannerRef.current : mobileBannerRef.current;
    const emptyColCount = calculateEmptyColumns(useDesktopBanner, bannerContainerContentWidth);
    trailingEmptyColumns =
      emptyColCount > 0
        ? [...Array(emptyColCount)].map((_, index) => <EmptyColumn key={index} />)
        : null;
  }

  return (
    <BannerContainer>
      <AccessibleHiddenHeading>laney.tech</AccessibleHiddenHeading>
      <BannerGrid $isHidden={!isMounted}>
        {banner}
        {trailingEmptyColumns}
      </BannerGrid>
    </BannerContainer>
  );
};

export default Banner;
