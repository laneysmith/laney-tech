import styled from 'styled-components';

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

export { ThemePickerContainer, ThemeButton };
