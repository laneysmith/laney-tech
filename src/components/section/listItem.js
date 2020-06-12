import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ children, icon }) => (
  <>
    <div role="img">{icon}</div>
    <div role="listitem">{children}</div>
  </>
);

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
};

export default ListItem;
