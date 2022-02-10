import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Theme, themeOptions } from './themes';
import { GlobalStyle } from './GlobalStyle';
import ThemePicker from './ThemePicker';
import Banner from './Banner';
import Footer from './Footer';
import { useIsMounted } from './utils';
import { LinkButton } from '../Shared/Button';

const LayoutContainer = styled.div`
  margin: 0;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  margin: 0 auto;
  max-width: 650px;
  padding: 0 1em;
`;

interface LayoutProps {
  location: {
    pathname: string;
  };
}

const Layout: React.FC<LayoutProps> = ({ location, children }) => {
  const [theme, setTheme] = useState(Theme.LIGHT_THEME);
  const rootPath = `${__PATH_PREFIX__}/`; // eslint-disable-line no-undef
  const isRootPath = location.pathname === rootPath;
  const isMounted = useIsMounted();
  const homeButton = isMounted && !isRootPath && (
    <nav>
      <LinkButton to="/">← Home</LinkButton>
    </nav>
  );

  return (
    <ThemeProvider theme={themeOptions[theme]}>
      <GlobalStyle />
      <LayoutContainer>
        <ThemePicker theme={theme} setTheme={setTheme} />
        <Banner />
        <MainWrapper>
          {homeButton}
          {children}
          {homeButton}
        </MainWrapper>
        <Footer />
      </LayoutContainer>
    </ThemeProvider>
  );
};

export default Layout;
