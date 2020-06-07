import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { THEME_LIST } from '../constants';

const ThemePickerContainer = styled.div`
  text-align: right;
  width: 100%;

  @media only screen and (max-width: 600px) {
    padding-right: 0.5em;
  }
`;

const ThemeButton = styled.button`
  background: ${({ theme }) => theme.gridBackgroundColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 3px;
  color: ${({ theme }) => theme.linkColor};
  font-size: 1em;
  font-weight: 500;
  text-decoration: none;
  padding: 6px 8px;
  margin: 0 0 0 0.5em;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  &:disabled {
    color: ${({ theme }) => theme.textColor};
    opacity: 0.8;
  }

  &:disabled:hover {
    text-decoration: none;
    cursor: default;
  }

  &:focus {
    outline: none;
  }
`;

const ThemePicker = ({ theme, setTheme }) => (
  <ThemePickerContainer>
    <b>Theme:</b>
    {THEME_LIST.map(color => {
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
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default ThemePicker;
