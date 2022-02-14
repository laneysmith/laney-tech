import React from 'react';
import styled from 'styled-components';

import { THEME_LIST, Theme } from './themes';
import { rhythm } from '../../utils/typography';
import RadioButton from '../Shared/Radio';

const ThemePickerFieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  margin: 0;
  width: 100%;

  @media only screen and (max-width: 600px) {
    padding-right: ${rhythm(0.5)};
  }
`;

const RadioGroup = styled.div.attrs({ role: 'radiogroup' })``;

interface ThemePickersProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemePicker: React.FC<ThemePickersProps> = ({ theme, setTheme }) => {
  return (
    <ThemePickerFieldset>
      <b id="radio-group-label">Theme:</b>
      <RadioGroup aria-labelledby="radio-group-label">
        {THEME_LIST.map(color => {
          const isSelected = theme === color;
          return (
            <RadioButton
              key={color}
              id={`${color}-radio`}
              name="theme"
              value={color}
              onChange={() => setTheme(color)}
              checked={isSelected}
              aria-checked={isSelected}
            >
              {color}
            </RadioButton>
          );
        })}
      </RadioGroup>
    </ThemePickerFieldset>
  );
};

export default ThemePicker;
