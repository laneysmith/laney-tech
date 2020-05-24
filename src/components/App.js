import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import * as ThemeStyles from './styles/Themes';
import GlobalStyles from './styles/Global';

import { Banner } from './Banner';
import { Sections } from './Sections';
import { ThemePicker } from './ThemePicker';
import { Footer } from './Footer';
import { LIGHT_THEME, THEME_LIST } from './constants';

const App = () => {
  const [theme, setTheme] = useState(LIGHT_THEME);

  return (
    <ThemeProvider theme={ThemeStyles[theme]}>
      <GlobalStyles />
      <ThemePicker theme={theme} setTheme={setTheme} themeList={THEME_LIST} />
      <Banner />
      <Sections />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
