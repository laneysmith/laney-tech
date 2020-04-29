import React from 'react';

import SectionTemplate from './SectionTemplate';
import List from './List';
import ListItem from './ListItem';

const Contact = () => (
  <SectionTemplate title="Contact Me">
    <List>
      <ListItem icon="💻">
        <a href="https://github.com/laneysmith">github.com/laneysmith</a>
      </ListItem>
      <ListItem icon="👔">
        <a href="https://linkedin.com/in/laneysmith">linkedin.com/in/laneysmith</a>
      </ListItem>
      <ListItem icon="📨">
        <a href="mailto:hello@laney.tech">hello@laney.tech</a>
      </ListItem>
    </List>
  </SectionTemplate>
);

export default Contact;
