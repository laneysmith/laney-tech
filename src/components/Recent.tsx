import React from 'react';

import Section from './Shared/Section';
import { List, ListItem } from './Shared/List';

const Recent: React.FC = () => (
  <Section title="Recent activity">
    Lately I&apos;ve been...
    <List>
      <ListItem $icon="🎨">
        making a colorful <a href="https://gingham.laney.tech/">CSS pattern generator</a>,
      </ListItem>
      <ListItem $icon="⛷️">
        building an offline-friendly{' '}
        <a href="https://avy.laney.tech/">avalanche safety handbook PWA</a>,
      </ListItem>
      <ListItem $icon="🚴">
        mapping <a href="https://denver-bikes.laney.tech/">Denver&apos;s bike infrastructure</a>,
      </ListItem>
      <ListItem $icon="🧪">
        conducting various <a href="https://github.com/laneysmith/">experiments</a>,
      </ListItem>
      <ListItem $icon="✨">
        and building modern websites that make people&apos;s lives easier.
      </ListItem>
    </List>
  </Section>
);

export default Recent;
