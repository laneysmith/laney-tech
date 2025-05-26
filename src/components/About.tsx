import React from 'react';

import Section from './Shared/Section';
import { List, ListItem } from './Shared/List';

const About: React.FC = () => (
  <Section title="Laney Pouzet">
    <List>
      <ListItem $icon="👩‍💻">Software engineer</ListItem>
      <ListItem $icon="🏔">Based in Washington</ListItem>
    </List>
  </Section>
);

export default About;
