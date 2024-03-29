import React from 'react';
import { PageProps, graphql } from 'gatsby';

import SEO from '../components/Layout/SEO';
import About from '../components/About';
import Articles from '../components/Articles';
import Recent from '../components/Recent';
import Contact from '../components/Contact';
import { ExternalPosts, Post } from '../types/siteMetadata';
import SkillsAndExperience from '../components/SkillsAndExperience';

interface Data {
  site: {
    siteMetadata: {
      title: string;
      externalPosts: ExternalPosts[];
    };
  };
  allMarkdownRemark: {
    edges: Post[];
  };
}

const BlogIndex: React.FC<PageProps<Data>> = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  const { externalPosts } = data.site.siteMetadata;

  return (
    <>
      <SEO pageTitle="Home" />
      <About />
      <Recent />
      <Articles posts={posts} externalPosts={externalPosts} />
      <SkillsAndExperience />
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
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
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
