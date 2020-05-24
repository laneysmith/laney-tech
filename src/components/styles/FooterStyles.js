import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  font-size: 0.8em;
  color: ${({ theme }) => theme.textColor};
  border-top: 1px solid ${({ theme }) => theme.borderColor};
  opacity: 0.6;
  margin: 2em 0 0 0;
  padding: 1em 1em 0 1em;
  width: 100%;
`;

export { FooterContainer };
