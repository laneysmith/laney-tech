import styled from 'styled-components';

const Button = styled.button`
  background: ${({ theme }) => theme.gridBackgroundColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 3px;
  color: ${({ theme }) => theme.linkColor};
  font-size: 1em;
  font-weight: 500;
  text-decoration: none;
  padding: 6px 8px;

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
  }

  &:focus {
    outline: none;
  }
`;

export default Button;
