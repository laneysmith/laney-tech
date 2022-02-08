declare module 'global';

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare const __PATH_PREFIX__: string

// @types/gatsby-plugin-disqus doesn't exist
declare module 'gatsby-plugin-disqus';

// @types/typography-theme-github doesn't exist
declare module 'typography-theme-github';
