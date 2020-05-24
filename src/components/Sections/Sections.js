import React from 'react';

import About from './About';
import Contact from './Contact';
import Recent from './Recent';

import { SectionsContainer } from '../styles/SectionStyles';

const Sections = () => (
  <SectionsContainer>
    <About />
    <Recent />
    <Contact />
  </SectionsContainer>
);

export default Sections;
