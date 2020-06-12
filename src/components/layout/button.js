import React from 'react';
import PropTypes from 'prop-types';
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

const StyledButton = ({ id, type, onClick, disabled, ...props }) => {
  return <Button {...props} id={id} type={type} onClick={onClick} disabled={disabled} />;
};

StyledButton.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

StyledButton.defaultProps = {
  id: null,
  type: 'button',
  onClick: () => {},
  disabled: false,
};

export default StyledButton;
