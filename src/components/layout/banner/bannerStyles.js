import styled from 'styled-components';

const GridCell = styled.div`
  height: 12px;
  width: 12px;
  outline: none;

  &:hover {
    border: 1px solid ${({ theme }) => theme.textColor};
  }
`;

const GridCellEmpty = styled(GridCell)`
  background: ${({ theme, colorNumber }) => {
    if (colorNumber === 0) {
      return theme.cellColor;
    }
    return theme[`accentColor${colorNumber}`];
  }};
  cursor: pointer;
`;

const GridCellFilled = styled(GridCell)`
  background: ${({ theme, randomNumber }) => theme[`accentColor${randomNumber}`]};

  &:focus {
    border: 1px solid ${({ theme }) => theme.textColor};
  }
`;

export { GridCellEmpty, GridCellFilled };
