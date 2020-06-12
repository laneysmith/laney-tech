import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Section from './section';
import List from './section/list';
import ListItem from './section/listItem';

export const PureContact = ({ data }) => {
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
          <a href={`mailto:${email}`}>{email}</a>
        </ListItem>
      </List>
    </Section>
  );
};

PureContact.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        social: PropTypes.shape({
          github: PropTypes.string.isRequired,
          linkedin: PropTypes.string.isRequired,
          email: PropTypes.string.isRequired,
        }),
      }),
    }),
  }).isRequired,
};

const Contact = props => (
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
    render={data => <PureContact {...props} data={data} />}
  />
);

export default Contact;
