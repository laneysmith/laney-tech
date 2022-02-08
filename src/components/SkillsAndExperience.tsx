import React from 'react';
import styled from 'styled-components';

import Section from './Shared/Section';
import { List, ListItem } from './Shared/List';

const Category = styled.strong`
  font-weight: 600;
`;

const SkillsAndExperience: React.FC = () => {
  return (
    <Section title="Skills and experience">
      <List>
        <ListItem $icon="⌨️">
          <Category>Languages:</Category> JavaScript, TypeScript, Java, HTML, CSS/SCSS/LESS,
          GraphQL, SQL
        </ListItem>
        <ListItem $icon="🧰">
          <Category>Libraries and frameworks:</Category> React, Apollo Client, Next.js, Gatsby,
          Ember.js, Vue, Styled Components, Node.js, Express, Mapbox GL JS, Spring, Jest, React
          Testing Library, Mocha + Chai
        </ListItem>
      </List>
    </Section>
  );
};

export default SkillsAndExperience;
