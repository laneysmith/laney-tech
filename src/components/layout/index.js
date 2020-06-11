import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import window from 'global';

import { LIGHT_THEME } from '../constants';
import { GlobalStyle } from './globalStyle';
import * as ThemeStyles from './themes';
import ThemePicker from './themePicker';
import Banner from './banner';
import Footer from './footer';
import SEO from './seo';
import Button from './button';

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

const Layout = ({ pageTitle, location, children }) => {
  const [theme, setTheme] = useState(
    (window.localStorage && window.localStorage.getItem('laneyTechTheme')) || LIGHT_THEME
  );
  const handleChangeTheme = selectedTheme => {
    setTheme(selectedTheme);
    window.localStorage.setItem('laneyTechTheme', selectedTheme);
  };

  const rootPath = `${__PATH_PREFIX__}/`; // eslint-disable-line no-undef
  const isRootPath = location.pathname === rootPath;

  const homeButton = (
    <nav>
      <Button>
        <Link to="/">← Home</Link>
      </Button>
    </nav>
  );

  return (
    <ThemeProvider theme={ThemeStyles[theme]}>
      <GlobalStyle />
      <SEO pageTitle={pageTitle} />
      <LayoutContainer>
        <ThemePicker theme={theme} setTheme={handleChangeTheme} />
        <Banner />
        <MainWrapper>
          {!isRootPath && homeButton}
          {children}
          {!isRootPath && homeButton}
        </MainWrapper>
        <Footer />
      </LayoutContainer>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
