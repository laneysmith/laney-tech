import React from 'react';
import styled from 'styled-components';
import { rhythm } from '../../utils/typography';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  font-size: 0.8em;
  color: ${({ theme }) => theme.secondaryTextColor};
  border-top: 1px solid ${({ theme }) => theme.borderColor};
  margin: ${rhythm(1)} 0 0 0;
  padding: ${rhythm(0.5)} ${rhythm(0.5)} 0 ${rhythm(0.5)};
  width: 100%;
`;

const Footer = () => (
  <FooterContainer>
    &#169; {new Date().getFullYear()}, Built by Laney Smith with 💜 and&nbsp;
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </FooterContainer>
);

export default Footer;
