declare module 'global';

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

// @types/typography-theme-github doesn't exist
declare module 'typography-theme-github';
