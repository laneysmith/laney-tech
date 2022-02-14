import React from 'react';
import { GatsbyLinkProps, Link } from 'gatsby';
import styled from 'styled-components';
import { buttonStyles } from './styleUtils';

type CustomGatsbyLinkProps = Omit<GatsbyLinkProps<{}>, 'ref'>;

const StyledLink = styled(Link)`
  ${buttonStyles()}
`;

const ButtonLink: React.FC<CustomGatsbyLinkProps> = ({ children, ...props }) => {
  return <StyledLink {...props}>{children}</StyledLink>;
};

export default ButtonLink;
