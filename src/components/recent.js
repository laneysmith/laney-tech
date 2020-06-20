import React from 'react';

import Section from './section';
import List from './section/list';
import ListItem from './section/listItem';

const Recent = () => (
  <Section id="recent-section" title="Recent Activity">
    Lately I've been...
    <List>
      <ListItem icon="🗺">
        building a data-driven map of <a href="https://covid.laney.tech/">Covid-19 cases</a> in US
        counties,
      </ListItem>
      <ListItem icon="🚴">
        mapping <a href="https://denver-bikes.laney.tech/">Denver's bike infrastructure</a>,
      </ListItem>
      <ListItem icon="🧪">
        conducting various <a href="https://github.com/laneysmith/">experiments</a>,
      </ListItem>
      <ListItem icon="✨">and building modern websites that make people's lives easier.</ListItem>
    </List>
  </Section>
);

export default Recent;
