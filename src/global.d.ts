declare module "*.svg" {
  const content: any;
  export default content;
}

declare const __PATH_PREFIX__: string

// @types/gatsby-plugin-disqus doesn't exist
declare module 'gatsby-plugin-disqus';
