import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 1em;
    background: ${({ theme }) => theme.backgroundColor};
    background-attachment: fixed;
    color: ${({ theme }) => theme.textColor};
    font-size: 14px;
    line-height: 1.5em;
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

  h2 {
    font-size: 1.2em;
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
      padding: 0.5em 0;
    }
  }
`;

export default GlobalStyles;
