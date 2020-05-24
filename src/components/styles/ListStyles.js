import styled from 'styled-components';

const ListContainer = styled.div`
  margin: 0.5em 0 0.5em 0.5em;
  display: grid;
  grid-template-columns: 20px 1fr;
  grid-column-gap: 8px;
  grid-row-gap: 4px;
  grid-auto-flow: row;

  > [role='img'] {
    font-size: 1.2em;
  }
`;

export { ListContainer };
