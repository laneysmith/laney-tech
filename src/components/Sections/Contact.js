import React from 'react';

import SectionTemplate from './SectionTemplate';
import List from './List';
import ListItem from './ListItem';

const Contact = () => (
  <SectionTemplate title="Contact Me">
    <List>
      <ListItem icon="💻">
        <a href="https://github.com/laneysmith">github</a>
      </ListItem>
      <ListItem icon="👔">
        <a href="https://linkedin.com/in/laneysmith">linkedin</a>
      </ListItem>
      <ListItem icon="📨">
        <a href="mailto:lsmith.unc@gmail.com">email</a>
      </ListItem>
    </List>
  </SectionTemplate>
);

export default Contact;
