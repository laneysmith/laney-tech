import React from 'react';
import styled, { css } from 'styled-components';
import { rhythm } from '../../utils/typography';
import { buttonStyles, focusOutline } from './styleUtils';

const Label = styled.label<{ $isSelected: boolean }>`
  ${buttonStyles()}
  margin-left: ${rhythm(0.5)};

  &:focus-within {
    ${focusOutline()}
  }

  ${({ $isSelected }) => {
    return (
      $isSelected &&
      css`
        color: ${({ theme }) => theme.textColor};
        opacity: 0.8;

        &:hover {
          text-decoration: none;
        }
      `
    );
  }}
`;

const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
`;

const RadioButton: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  children,
  ...props
}) => {
  return (
    <Label htmlFor={props.id} $isSelected={!!props.checked}>
      <HiddenInput type="radio" {...props} />
      {children}
    </Label>
  );
};

export default RadioButton;
