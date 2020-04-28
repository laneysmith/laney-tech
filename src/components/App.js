import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import * as ThemeStyles from './styles/Themes';
import GlobalStyles from './styles/Global';

import { Banner } from './Banner';
import { About, Recent, Contact } from './Sections';
import { ThemePicker } from './ThemePicker';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const themeList = ['light', 'dark', 'rainbow'];

  return (
    <ThemeProvider theme={ThemeStyles[theme]}>
      <GlobalStyles />
      <ThemePicker theme={theme} setTheme={setTheme} themeList={themeList} />
      <Banner />
      <About />
      <Recent />
      <Contact />
    </ThemeProvider>
  );
};

export default App;
