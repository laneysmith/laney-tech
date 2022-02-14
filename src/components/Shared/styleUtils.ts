import { css, FlattenInterpolation, ThemeProps, DefaultTheme } from 'styled-components';

export const focusOutline = (): FlattenInterpolation<ThemeProps<DefaultTheme>> => {
  return css`
    outline: ${({ theme }) => `2px dotted ${theme.textColor}`};
  `;
};

export const buttonStyles = (): FlattenInterpolation<ThemeProps<DefaultTheme>> => {
  return css`
    display: inline-block;
    background: ${({ theme }) => theme.gridBackgroundColor};
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: 3px;
    color: ${({ theme }) => theme.linkColor};
    font-size: 1em;
    font-weight: 500;
    text-decoration: none;
    padding: 6px 8px;
    min-height: 38px;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  `;
};
