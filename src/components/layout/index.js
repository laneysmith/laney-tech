import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import { LIGHT_THEME } from '../constants';
import { GlobalStyle } from './globalStyle';
import * as ThemeStyles from './themes';
import ThemePicker from './themePicker';
import Banner from './banner';
import Footer from './footer';

const LayoutContainer = styled.div`
  margin: 0;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const MainWrapper = styled.main`
  flex: 1 0 auto;
  margin: 0 auto;
  max-width: 650px;
  padding: 0 1em;
`;

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(window.localStorage.getItem('laneyTechTheme') || LIGHT_THEME);
  const handleChangeTheme = selectedTheme => {
    setTheme(selectedTheme);
    window.localStorage.setItem('laneyTechTheme', selectedTheme);
  };

  return (
    <ThemeProvider theme={ThemeStyles[theme]}>
      <GlobalStyle />
      <LayoutContainer>
        <ThemePicker theme={theme} setTheme={handleChangeTheme} />
        <Banner />
        <MainWrapper>{children}</MainWrapper>
        <Footer />
      </LayoutContainer>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
