import React from 'react';

import Section from './Shared/Section';
import { List, ListItem } from './Shared/List';

const About: React.FC = () => (
  <Section title="Laney Smith">
    <List>
      <ListItem $icon="👩‍💻">Web developer</ListItem>
      <ListItem $icon="🏔">Based in Colorado</ListItem>
    </List>
  </Section>
);

export default About;
