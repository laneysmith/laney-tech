import React from 'react';
import { GatsbyLinkProps, Link } from 'gatsby';
import styled, { css, FlattenInterpolation, ThemeProps, DefaultTheme } from 'styled-components';

const buttonStyles = (): FlattenInterpolation<ThemeProps<DefaultTheme>> => {
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

    &[aria-pressed='true'],
    &:disabled {
      color: ${({ theme }) => theme.textColor};
      opacity: 0.8;
    }

    &:disabled:hover {
      text-decoration: none;
    }
  `;
};

export const StyledButton = styled.button`
  ${buttonStyles()}
`;

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = props => {
  return <StyledButton tabIndex={0} {...props} />;
};

type CustomGatsbyLinkProps = Omit<GatsbyLinkProps<{}>, 'ref'>;

const StyledLink = styled(Link)`
  ${buttonStyles()}
`;

export const LinkButton: React.FC<CustomGatsbyLinkProps> = ({ children, ...props }) => {
  return <StyledLink {...props}>{children}</StyledLink>;
};

export default Button;
