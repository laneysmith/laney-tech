import styled from 'styled-components';

export const colorNumbers = [0, 1, 2, 3, 4, 5] as const;
export type ColorNumber = (typeof colorNumbers)[number];

interface GridCellProps {
  colorNumber: ColorNumber;
}

export const getNextNumber = (index: number): ColorNumber =>
  colorNumbers[index % colorNumbers.length];

const GridCell = styled.div<GridCellProps>`
  height: 12px;
  width: 12px;
  outline: none;

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

export const GridCellFilled = styled(GridCellEmpty)`
  &:focus {
    border: 1px solid ${({ theme }) => theme.textColor};
  }
`;
