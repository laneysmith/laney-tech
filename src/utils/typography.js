import Typography from 'typography';
import GithubTheme from 'typography-theme-github';

GithubTheme.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    h2: {
      borderBottom: `none`,
    },
    body: {
      fontColor: 'unset',
      fontSize: '14px',
    },
  };
};

delete GithubTheme.googleFonts;

const typography = new Typography(GithubTheme);

if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const { rhythm } = typography;
export const { scale } = typography;
