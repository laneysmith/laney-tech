import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BAR_HEIGHT = 5;

const ProgressContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: transparent;
  height: ${BAR_HEIGHT}px;
  width: 100%;
`;

const ProgressBar = styled.div`
  height: ${BAR_HEIGHT}px;
  background: ${({ theme }) => theme.accentColor3};
`;

const calculateScrollPercentage = (): number => {
  const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const currentPosition = document.body.scrollTop || document.documentElement.scrollTop;
  return (currentPosition / totalHeight) * 100;
};

const ScrollProgressBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(0);
  const scrollEvent = () => requestAnimationFrame(() => setScrolled(calculateScrollPercentage()));

  useEffect(() => {
    document.addEventListener('scroll', scrollEvent);
    return () => document.removeEventListener('scroll', scrollEvent);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ProgressContainer>
      <ProgressBar style={{ width: `${scrolled}%` }} />
    </ProgressContainer>
  );
};

export default ScrollProgressBar;
