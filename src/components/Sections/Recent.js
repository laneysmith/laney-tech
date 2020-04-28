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
        writing{' '}
        <a href="https://dev.to/laney/mapbox-how-to-conditionally-style-features-based-on-covid-19-data-h78">
          more
        </a>{' '}
        <a href="https://dev.to/laney/react-mapbox-beginner-tutorial-2e35">articles</a>,
      </ListItem>
      <ListItem icon="✨">and building modern websites that make people's lives easier.</ListItem>
    </List>
  </SectionTemplate>
);

export default Recent;
