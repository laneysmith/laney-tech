import styled from 'styled-components';

const BannerContainer = styled.div`
  background-color: ${({ theme }) => theme.gridBackgroundColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em 0;
  padding: 16px;

  @media only screen and (max-width: 600px) {
    padding: 1em 0;
    border-top: 1px solid ${({ theme }) => theme.borderColor};
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    border-left: 0;
    border-right: 0;
    border-radius: 0;
    margin: 0.5em 0;
  }
`;

const BannerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 12px);
  grid-template-rows: repeat(7, 12px);
  grid-column-gap: 3px;
  grid-row-gap: 3px;
  grid-auto-flow: column;
`;

const GridCell = styled.div`
  height: 12px;
  width: 12px;

  &:hover {
    border: 1px solid ${({ theme }) => theme.textColor};
  }
`;

const GridCellEmpty = styled(GridCell)`
  background: ${({ theme, colorIndex }) => {
    if (colorIndex === 0) {
      return theme.cellColor;
    }
    return theme[`accentColor${colorIndex}`];
  }};
`;

const GridCellFilled = styled(GridCell)`
  background: ${({ theme, randomNumber }) => theme[`accentColor${randomNumber}`]};
  cursor: pointer;
  outline: none;

  &:focus {
    border: 1px solid ${({ theme }) => theme.textColor};
    outline: none;
  }
`;

export { BannerContainer, BannerGrid, GridCellEmpty, GridCellFilled };
