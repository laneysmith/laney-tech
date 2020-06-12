import React from 'react';

import Section from './section';
import List from './section/list';
import ListItem from './section/listItem';

const Recent = () => (
  <Section id="recent-section" title="Recent Activity">
    Lately I've been...
    <List>
      <ListItem icon="🗺">
        making <a href="https://covid.laney.tech/">data-driven maps</a>,
      </ListItem>
      <ListItem icon="🧪">
        conducting various <a href="https://github.com/laneysmith/">experiments</a>,
      </ListItem>
      <ListItem icon="✨">and building modern websites that make people's lives easier.</ListItem>
    </List>
  </Section>
);

export default Recent;
