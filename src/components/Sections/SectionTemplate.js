import React from 'react';
import PropTypes from 'prop-types';

import { Section, SectionDetail } from '../styles/SectionStyles';

const SectionTemplate = ({ title, children }) => (
  <Section>
    <h2>{title}</h2>
    <SectionDetail>{children}</SectionDetail>
  </Section>
);

SectionTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SectionTemplate;
