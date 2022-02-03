import React from 'react';

import Section from './Section';
import List from './Section/List';
import ListItem from './Section/ListItem';

const About: React.FC = () => (
  <Section id="about-section" title="Laney Smith">
    <List>
      <ListItem icon="👩‍💻">Web developer</ListItem>
      <ListItem icon="🏔">Based in Colorado</ListItem>
    </List>
  </Section>
);

export default About;
