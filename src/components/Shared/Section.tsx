import React from 'react';
import styled from 'styled-components';

import { rhythm } from '../../utils/typography';

const SectionContainer = styled.section`
  margin: 0 0 ${rhythm(0.5)} 0;
  padding: 0 ${rhythm(0.5)};

  @media only screen and (max-width: 600px) {
    padding: 0;
  }
`;

const SectionDetail = styled.div`
  padding: ${rhythm(0.5)} 0 ${rhythm(0.5)} ${rhythm(0.5)};
  margin-left: ${rhythm(0.5)};
  border-left: 1px solid ${({ theme }) => theme.borderColor};
`;

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <SectionContainer>
    <h2>{title}</h2>
    <SectionDetail>{children}</SectionDetail>
  </SectionContainer>
);

export default Section;
