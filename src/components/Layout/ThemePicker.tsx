import React from 'react';
import styled from 'styled-components';

import Button from './Button';

import { rhythm } from '../../utils/typography';
import { THEME_LIST, Theme } from '../constants';

const ThemePickerContainer = styled.div`
  text-align: right;
  width: 100%;

  @media only screen and (max-width: 600px) {
    padding-right: ${rhythm(0.5)};
  }
`;

interface ThemePickersProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemePicker: React.FC<ThemePickersProps> = ({ theme, setTheme }) => (
  <ThemePickerContainer>
    <b>Theme:</b>
    {THEME_LIST.map(color => {
      const isSelected = theme === color;
      return (
        <Button
          id={`${color}-theme-btn`}
          key={`${color}-theme`}
          onClick={() => setTheme(color)}
          disabled={isSelected}
          style={{ marginLeft: `${rhythm(0.5)}` }}
        >
          {color}
        </Button>
      );
    })}
  </ThemePickerContainer>
);

export default ThemePicker;
