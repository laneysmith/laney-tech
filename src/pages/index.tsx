import React from 'react';
import { PageProps, graphql } from 'gatsby';

import SEO from '../components/layout/seo';
import About from '../components/about';
import Articles from '../components/articles';
import Recent from '../components/recent';
import Contact from '../components/contact';

type Data = {
  site: {
    siteMetadata: {
      title: string;
      externalPosts: {
        title: string;
        link: string;
      }[];
    };
  };
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string;
        frontmatter: {
          title: string;
          date: string;
        };
        fields: {
          slug: string;
        };
      };
    }[];
  };
};

const BlogIndex = ({ data }: PageProps<Data>) => {
  const { edges: posts } = data.allMarkdownRemark;
  const { externalPosts } = data.site.siteMetadata;

  return (
    <>
      <SEO pageTitle="Home" />
      <About />
      <Recent />
      <Articles posts={posts} externalPosts={externalPosts} />
      <Contact />
    </>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        externalPosts {
          title
          link
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
