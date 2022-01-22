import React from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  margin: 0.5em 0 0.5em 0.5em;
  display: grid;
  grid-template-columns: 24px 1fr;
  grid-column-gap: 4px;
  grid-row-gap: 4px;
  grid-auto-flow: row;

  > [role='img'] {
    font-size: 1.2em;
  }
`;

const List: React.FC = ({ children }) => <ListContainer role="list">{children}</ListContainer>;

export default List;
