import React, { useState, type ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './GlobalStyle';
import ThemePicker from './ThemePicker';
import Banner from './Banner';
import Footer from './Footer';
import { themeOptions, type Theme } from './themes';

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

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const themeObj = themeOptions[theme];

  return (
    <ThemeProvider theme={themeObj}>
      <GlobalStyle />
      <LayoutContainer>
        <header>
          <ThemePicker theme={themeOptions[theme]} setTheme={setTheme} />
          <Banner />
        </header>
        <MainWrapper>{children}</MainWrapper>
        <Footer />
      </LayoutContainer>
    </ThemeProvider>
  );
};

export default Layout;
