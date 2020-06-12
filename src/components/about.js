import React from 'react';

import Section from './section';
import List from './section/list';
import ListItem from './section/listItem';

const About = () => (
  <Section id="about-section" title="Laney Smith">
    <List>
      <ListItem icon="👩‍💻">web developer</ListItem>
      <ListItem icon="🏔">Bellingham, WA</ListItem>
    </List>
  </Section>
);

export default About;
