import React from 'react';
import PropTypes from 'prop-types';

import { List as StyledList } from '../styles/ListStyles';

const List = ({ children }) => <StyledList role="list">{children}</StyledList>;

List.propTypes = {
  children: PropTypes.node.isRequired,
};

export default List;
