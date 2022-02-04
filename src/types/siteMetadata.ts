export interface ExternalPosts {
    title: string;
    link: string;
}

export interface Social {
    github: string;
    linkedin: string;
    email: string;
}

export interface SiteMetadata {
    title: string;
    author: {
        name: string;
    }
    description: string;
    siteUrl: string;
    social: Social;
    externalPosts?: ExternalPosts[];
}

export interface Post {
    node: {
      excerpt: string;
      frontmatter: {
        title: string;
        date: string;
        description?: string;
      };
      fields: {
        slug: string;
      };
    };
  }