import React from 'react';
import PropTypes from 'prop-types';
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

const Section = ({ id, title, children }) => (
  <SectionContainer id={id}>
    <h3>{title}</h3>
    <SectionDetail>{children}</SectionDetail>
  </SectionContainer>
);

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
