import React from 'react';

import Section from './Shared/Section';
import { List, ListItem } from './Shared/List';

const GITHUB = 'laneysmith';
const LINKED_IN = 'laneypouzet';
const EMAIL = 'lsmith.unc@gmail.com';
const GITHUB_URL = `https://github.com/${GITHUB}`;
const LINKEDIN_URL = `https://linkedin.com/in/${LINKED_IN}`;
const MAIL_TO = `mailto:${EMAIL}`;

export const Contact: React.FC = () => (
  <Section title="Contact me">
    <List>
      <ListItem $icon="💾">
        <a href={GITHUB_URL}>github.com/{GITHUB}</a>
      </ListItem>
      <ListItem $icon="👔">
        <a href={LINKEDIN_URL}>linkedin.com/in/{LINKED_IN}</a>
      </ListItem>
      <ListItem $icon="📨">
        <a href={MAIL_TO}>{EMAIL}</a>
      </ListItem>
    </List>
  </Section>
);

export default Contact;
