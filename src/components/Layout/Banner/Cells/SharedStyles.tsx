import styled from 'styled-components';

interface GridCellProps {
  colorNumber: number;
}

const GridCell = styled.div<GridCellProps>`
  height: 12px;
  width: 12px;
  outline: none;
  transition: all 0.25s linear;

  &:hover {
    border: 1px solid ${({ theme }) => theme.textColor};
  }
`;

export const GridCellEmpty = styled(GridCell)`
  background: ${({ theme, colorNumber }) => {
    if (colorNumber === 0) {
      return theme.cellColor;
    }
    return theme[`accentColor${colorNumber}`];
  }};
  cursor: pointer;
`;

export const GridCellFilled = styled(GridCell)`
  background: ${({ theme, colorNumber }) => theme[`accentColor${colorNumber}`]};
  &:focus {
    border: 1px solid ${({ theme }) => theme.textColor};
  }
`;
