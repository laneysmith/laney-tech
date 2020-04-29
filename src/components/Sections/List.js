import React from 'react';
import PropTypes from 'prop-types';

import { ListContainer } from '../styles/ListStyles';

const List = ({ children }) => <ListContainer role="list">{children}</ListContainer>;

List.propTypes = {
  children: PropTypes.node.isRequired,
};

export default List;
