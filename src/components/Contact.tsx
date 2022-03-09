import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Section from './Shared/Section';
import { List, ListItem } from './Shared/List';
import { SiteMetadata } from '../types/siteMetadata';

interface ContactProps {
  data: {
    site: {
      siteMetadata: {
        social: SiteMetadata['social'];
      };
    };
  };
}

export const PureContact: React.FC<ContactProps> = ({ data }) => {
  const { github, linkedin, email } = data.site.siteMetadata.social;
  const GITHUB_URL = `https://github.com/${github}`;
  const LINKEDIN_URL = `https://linkedin.com/in/${linkedin}`;
  const MAIL_TO = `mailto:${email}`;

  return (
    <Section title="Contact me">
      <List>
        <ListItem $icon="💾">
          <a href={GITHUB_URL}>github.com/{github}</a>
        </ListItem>
        <ListItem $icon="👔">
          <a href={LINKEDIN_URL}>linkedin.com/in/{linkedin}</a>
        </ListItem>
        <ListItem $icon="📨">
          <a href={MAIL_TO}>{email}</a>
        </ListItem>
      </List>
    </Section>
  );
};

const Contact = (): React.ReactElement => (
  <StaticQuery
    query={graphql`
      query ContactQuery {
        site {
          siteMetadata {
            social {
              github
              linkedin
              email
            }
          }
        }
      }
    `}
    render={data => <PureContact data={data} />}
  />
);

export default Contact;
