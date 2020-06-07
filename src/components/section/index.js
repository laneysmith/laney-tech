import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionContainer = styled.section`
  margin: 2em auto;
  padding: 0 1em;

  @media only screen and (max-width: 600px) {
    padding: 0 0.5em;
  }
`;

const SectionDetail = styled.main`
  padding: 1em;
  margin-left: 1em;
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
