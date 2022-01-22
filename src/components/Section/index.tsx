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

const SectionDetail = styled.main`
  padding: ${rhythm(0.5)} 0 ${rhythm(0.5)} ${rhythm(0.5)};
  margin-left: ${rhythm(0.5)};
  border-left: 1px solid ${({ theme }) => theme.borderColor};
`;

interface SectionProps {
  id: string;
  title: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => (
  <SectionContainer id={id}>
    <h3>{title}</h3>
    <SectionDetail>{children}</SectionDetail>
  </SectionContainer>
);

export default Section;