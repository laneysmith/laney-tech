import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './button';

import { rhythm } from '../../utils/typography';
import { THEME_LIST } from '../constants';

const ThemePickerContainer = styled.div`
  text-align: right;
  width: 100%;

  @media only screen and (max-width: 600px) {
    padding-right: ${rhythm(0.5)};
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
          style={{ marginLeft: `${rhythm(0.5)}` }}
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
