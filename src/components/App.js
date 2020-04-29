import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import * as ThemeStyles from './styles/Themes';
import GlobalStyles from './styles/Global';

import { Banner } from './Banner';
import { About, Recent, Contact } from './Sections';
import { ThemePicker } from './ThemePicker';
import { LIGHT_THEME, THEME_LIST } from './constants';

const App = () => {
  const [theme, setTheme] = useState(LIGHT_THEME);

  return (
    <ThemeProvider theme={ThemeStyles[theme]}>
      <GlobalStyles />
      <ThemePicker theme={theme} setTheme={setTheme} themeList={THEME_LIST} />
      <Banner />
      <About />
      <Recent />
      <Contact />
    </ThemeProvider>
  );
};

export default App;
