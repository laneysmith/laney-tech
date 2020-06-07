import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Section from './section';
import List from './section/list';
import ListItem from './section/listItem';

const Contact = () => {
  const data = useStaticQuery(graphql`
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
  `);
  const { github, linkedin, email } = data.site.siteMetadata.social;

  return (
    <Section id="contact-section" title="Contact Me">
      <List>
        <ListItem icon="💾">
          <a href={`https://github.com/${github}`}>github.com/{github}</a>
        </ListItem>
        <ListItem icon="👔">
          <a href={`https://linkedin.com/in/${linkedin}`}>linkedin.com/in/{linkedin}</a>
        </ListItem>
        <ListItem icon="📨">
          <a href="mailto:lsmith.unc@gmail.com">{email}</a>
        </ListItem>
      </List>
    </Section>
  );
};

export default Contact;
