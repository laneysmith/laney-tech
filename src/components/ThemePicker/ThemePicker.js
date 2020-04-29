import React from 'react';
import PropTypes from 'prop-types';
import { ThemePickerContainer, ThemeButton } from '../styles/ThemePickerStyles';

const ThemePicker = ({ themeList, theme, setTheme }) => (
  <ThemePickerContainer>
    <b>Theme:</b>
    {themeList.map((color) => {
      const isSelected = theme === color;
      return (
        <ThemeButton
          id={`${color}-theme-btn`}
          key={`${color}-theme`}
          type="button"
          onClick={() => setTheme(color)}
          disabled={isSelected}
        >
          {color}
        </ThemeButton>
      );
    })}
  </ThemePickerContainer>
);

ThemePicker.propTypes = {
  themeList: PropTypes.arrayOf(PropTypes.string).isRequired,
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default ThemePicker;
