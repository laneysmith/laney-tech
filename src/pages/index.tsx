import React from 'react';
import { PageProps, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import About from '../components/about';
import Articles from '../components/articles';
import Recent from '../components/recent';
import Contact from '../components/contact';

type Data = {
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string;
        frontmatter: {
          title: string;
          date: string;
          description: string;
        };
        fields: {
          slug: string;
        };
      };
    }[];
  };
};

const BlogIndex = ({ data }: PageProps<Data>) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" />
      <About />
      <Recent />
      <Articles posts={posts} />
      <Contact />
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
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
            description
          }
        }
      }
    }
  }
`;
