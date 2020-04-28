import React from 'react';

import SectionTemplate from './SectionTemplate';
import List from './List';
import ListItem from './ListItem';

const Recent = () => (
  <SectionTemplate title="Recent Activity">
    Lately I've been...
    <List>
      <ListItem icon="🗺">
        making <a href="https://covid.laney.tech/">data-driven maps</a>,
      </ListItem>
      <ListItem icon="🧪">
        conducting various <a href="https://github.com/laneysmith/">experiments</a>,
      </ListItem>
      <ListItem icon="📓">
        writing a few <a href="https://dev.to/laney">articles</a> about coding,
      </ListItem>
      <ListItem icon="✨">and building modern websites that make people's lives easier.</ListItem>
    </List>
  </SectionTemplate>
);

export default Recent;
