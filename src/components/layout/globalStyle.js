import { createGlobalStyle } from 'styled-components';

import { rhythm } from '../../utils/typography';

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  #___gatsby {
    width: 100%;
  }

  body {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: ${rhythm(0.5)};
    background: ${({ theme }) => theme.backgroundColor};
    background-attachment: fixed;
    color: ${({ theme }) => theme.textColor};
    line-height: 1.7em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: all 0.25s linear;
  }

  #root {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
  }

  h1 {
    border-bottom-color: ${({ theme }) => theme.borderColor};
    margin: ${rhythm(0.5)} 0;
  }

  h2, h3 {
    border-bottom: none;
    margin: ${rhythm(0.5)} 0; 
  }

  small {
    color: ${({ theme }) => theme.secondaryTextColor};
  }

  blockquote {
    color: ${({ theme }) => theme.textColor};
    border-left-color: ${({ theme }) => theme.borderColor};
  }

  strong {
    font-weight: 800;
  }

  .svg-icon {
    fill: currentColor;
    height: 12px;
    width: 12px;
  }
  
  a {
    color: ${({ theme }) => theme.linkColor};
    font-weight: 500;
    text-decoration: none;
  }

  a:hover {
    color: ${({ theme }) => theme.linkColor};
    text-decoration: underline;
  }

   @media only screen and (max-width: 600px) {
    body {
      font-size:  16px;
      padding: ${rhythm(0.5)} 0;
    }
  }

  /* disqus overrides */
  #disqus_thread {
    background-color: #efefef;
    border-radius: 6px;
    margin-top: ${rhythm(1)};
    padding: 13px 13px 0 13px;
  }

  /* prismjs overrides */
  :not(pre) > code[class*="language-"] {
    background: ${({ theme }) => theme.cellColor} !important;
    color: ${({ theme }) => theme.textColor} !important;
    border: 1px solid ${({ theme }) => theme.borderColor} !important;
    padding: 1px 4px !important;
    border-radius: 2px !important;
  }

  code[class*="language-"], pre[class*="language-"] {
    font-family: 'PT Mono', monospace !important;
    font-size: 0.95em !important;
  }

  code[class*="language-"] {
    white-space: pre-wrap !important;
  }
`;
