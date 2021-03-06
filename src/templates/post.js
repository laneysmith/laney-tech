import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { Disqus } from 'gatsby-plugin-disqus';
import styled from 'styled-components';

import SEO from '../components/layout/seo';
import ScrollProgressBar from '../components/layout/scrollProgressBar';

import { rhythm, scale } from '../utils/typography';

const PostTitle = styled.h1`
  margin-top: ${rhythm(1)};
  margin-bottom: 0;
`;

const ArticleContainer = styled.article`
  flex: 1;
`;

const Divider = styled.hr`
  height: 1px;
  border-width: 0;
  background-color: ${({ theme }) => theme.borderColor};
  margin: ${rhythm(1)} 0;
`;

const BottomNav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const PostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const { siteUrl } = data.site.siteMetadata;
  const { id, frontmatter, excerpt, html } = post;
  const { title, date } = frontmatter;
  const { previous, next } = pageContext;
  const disqusConfig = {
    url: `${siteUrl + location.pathname}`,
    identifier: id,
    title,
  };

  return (
    <>
      <SEO pageTitle={title} description={excerpt} />
      <ScrollProgressBar />
      <ArticleContainer>
        <header>
          <PostTitle>{title}</PostTitle>
          <p style={{ ...scale(-1 / 5), display: `block` }}>{date}</p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: html }} />
        <Disqus config={disqusConfig} />
      </ArticleContainer>
      <Divider />
      <nav>
        {(previous || next) && (
          <>
            <BottomNav>
              {previous && (
                <li>
                  Previous article:{' '}
                  <Link to={previous.fields.slug} rel="prev">
                    {previous.frontmatter.title}
                  </Link>
                </li>
              )}
              {next && (
                <li>
                  Next article:{' '}
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title}
                  </Link>
                </li>
              )}
            </BottomNav>
            <Divider />
          </>
        )}
      </nav>
    </>
  );
};

PostTemplate.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    previous: PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }),
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
    next: PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }),
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        siteUrl: PropTypes.string.isRequired,
      }),
    }).isRequired,
    markdownRemark: PropTypes.shape({
      id: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    }).isRequired,
  }).isRequired,
};

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
