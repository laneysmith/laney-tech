import styled from 'styled-components';

const ListContainer = styled.div`
  margin: 0.5em 0 0.5em 0.5em;
  display: grid;
  grid-template-columns: 20px 1fr;
  grid-column-gap: 6px;
  grid-row-gap: 3px;
  grid-auto-flow: row;
`;

export { ListContainer };
