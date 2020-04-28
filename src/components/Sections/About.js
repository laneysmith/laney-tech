import React from 'react';

import SectionTemplate from './SectionTemplate';
import List from './List';
import ListItem from './ListItem';

const About = () => (
  <SectionTemplate title="Laney Smith">
    <List>
      <ListItem icon="👩‍💻">web developer</ListItem>
      <ListItem icon="🏔">Bellingham, WA</ListItem>
    </List>
  </SectionTemplate>
);

export default About;
