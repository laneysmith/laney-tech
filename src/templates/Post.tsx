import React from 'react';
import { Link, graphql, PageRendererProps } from 'gatsby';
import { Disqus } from 'gatsby-plugin-disqus';
import styled from 'styled-components';

import SEO from '../components/Layout/SEO';
import ScrollProgressBar from '../components/Layout/ScrollProgressBar';

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

interface PostData {
  site: {
    siteMetadata: {
      title: string;
      siteUrl: string;
    };
  };
  markdownRemark: {
    id: string;
    excerpt: string;
    html: string;
    frontmatter: {
      title: string;
      date: string;
    };
  };
}

interface PageInfo {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
  };
}

interface RelativePageInfo {
  previous: PageInfo;
  next: PageInfo;
}

interface PostTemplate extends PageRendererProps {
  data: PostData;
  pageContext: RelativePageInfo;
}

const PostTemplate: React.FC<PostTemplate> = ({ data, pageContext, location }) => {
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
