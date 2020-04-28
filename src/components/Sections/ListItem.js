import React from 'react';
import PropTypes from 'prop-types';

import { Bullet } from '../styles/ListStyles';

const ListItem = ({ children, icon }) => (
  <div role="listitem">
    {!!icon && <Bullet role="img">{icon}</Bullet>}
    {children}
  </div>
);

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node,
};

ListItem.defaultProps = {
  icon: null,
};

export default ListItem;
