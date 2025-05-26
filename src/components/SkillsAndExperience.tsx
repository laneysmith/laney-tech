import React from 'react';

import Section from './Shared/Section';
import { List, ListItem } from './Shared/List';

const SkillsAndExperience: React.FC = () => (
  <Section title="Skills and experience">
    <List>
      <ListItem $icon="⌨️">
        <b>Languages:</b> TypeScript, JavaScript, Java, HTML, CSS/SCSS/LESS, GraphQL, SQL
      </ListItem>
      <ListItem $icon="🧰">
        <b>Libraries and frameworks:</b> React, Apollo, Next.js, Gatsby, Ember.js, Vue, Styled
        Components, Node.js, Express, Mapbox GL JS, Spring, Jest, React Testing Library, Mocha +
        Chai
      </ListItem>
    </List>
  </Section>
);

export default SkillsAndExperience;
