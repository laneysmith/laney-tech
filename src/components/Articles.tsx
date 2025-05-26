import React from 'react';

import Section from './Shared/Section';
import { List, ListItem } from './Shared/List';
// TODO: Add svg support
// import ExternalLinkIcon from './icons/external-link.svg?react';

interface Post {
  title: string;
  link: string;
}

const posts: Post[] = [
  {
    title: 'Tutorial: Mapbox and React for Beginners (Dev.to)',
    link: 'https://dev.to/laney/react-mapbox-beginner-tutorial-2e35',
  },
  {
    title: 'Tutorial: Conditionally Styling Features Based on Data in Mapbox (Dev.to)',
    link: 'https://dev.to/laney/mapbox-how-to-conditionally-style-features-based-on-covid-19-data-h78',
  },
];

const ICONS = ['📘', '📗', '📙', '📕'];
const getIconByIndex = (index: number): string => ICONS[index % ICONS.length];

const Articles: React.FC = () => (
  <Section title="Articles">
    <List>
      {posts.map((post, index) => {
        const { title, link } = post;
        const iconIndex = index;
        return (
          <ListItem key={`external-post-${index}`} $icon={getIconByIndex(iconIndex)}>
            <a href={link}>
              {title}
              {/* <ExternalLinkIcon /> */}
            </a>
          </ListItem>
        );
      })}
    </List>
  </Section>
);

export default Articles;
