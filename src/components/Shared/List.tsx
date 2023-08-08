import React from 'react';
import styled from 'styled-components';

import { rhythm } from '../../utils/typography';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${rhythm(0.25)} 0 ${rhythm(0.25)} ${rhythm(0.25)};
`;

export const ListItem = styled.li<{ $icon: React.ReactNode }>`
  position: relative;
  margin-left: ${rhythm(1)};

  &::before {
    content: ${props => `'${props.$icon}'`};
    position: absolute;
    left: -${rhythm(1)};
  }
`;
