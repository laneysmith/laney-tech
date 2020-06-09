import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './button';

import { THEME_LIST } from '../constants';

const ThemePickerContainer = styled.div`
  text-align: right;
  width: 100%;

  @media only screen and (max-width: 600px) {
    padding-right: 0.5em;
  }
`;

const ThemePicker = ({ theme, setTheme }) => (
  <ThemePickerContainer>
    <b>Theme:</b>
    {THEME_LIST.map(color => {
      const isSelected = theme === color;
      return (
        <Button
          id={`${color}-theme-btn`}
          key={`${color}-theme`}
          type="button"
          onClick={() => setTheme(color)}
          disabled={isSelected}
        >
          {color}
        </Button>
      );
    })}
  </ThemePickerContainer>
);

ThemePicker.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default ThemePicker;
