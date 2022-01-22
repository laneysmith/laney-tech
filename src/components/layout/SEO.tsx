import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface SEOProps {
  pageTitle: string;
  description?: string;
  lang?: string;
  meta?: HTMLMetaElement[];
}

const SEO: React.FC<SEOProps> = ({ description = '', lang = 'en', meta = [], pageTitle }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          social {
            github
          }
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={pageTitle}
      titleTemplate={`${site.siteMetadata.title} | %s`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: pageTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
      base={{ target: '_blank' }}
    >
      <base target="_blank" />
    </Helmet>
  );
};

export default SEO;
