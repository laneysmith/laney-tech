import React from 'react';
import styled from 'styled-components';
import { buttonStyles } from './styleUtils';

export const StyledButton = styled.button`
  ${buttonStyles()}
`;

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = props => {
  return <StyledButton tabIndex={0} {...props} />;
};

export default Button;
