import React from 'react';
import styled from 'styled-components';

import { THEME_LIST, Theme } from './themes';
import { rhythm } from '../../utils/typography';
import Button, { StyledButton } from '../Shared/Button';

const ThemePickerContainer = styled.div`
  text-align: right;
  width: 100%;

  @media only screen and (max-width: 600px) {
    padding-right: ${rhythm(0.5)};
  }

  ${StyledButton} {
    margin-left: ${rhythm(0.5)};
  }
`;

interface ThemePickersProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemePicker: React.FC<ThemePickersProps> = ({ theme, setTheme }) => {
  return (
    <ThemePickerContainer>
      <b>Theme:</b>
      {THEME_LIST.map(color => {
        const isSelected = theme === color;
        return (
          <Button key={color} onClick={() => setTheme(color)} aria-pressed={isSelected}>
            {color}
          </Button>
        );
      })}
    </ThemePickerContainer>
  );
};

export default ThemePicker;
