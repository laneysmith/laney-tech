import React from 'react';

interface ListItemProps {
  icon: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ children, icon }) => (
  <>
    <div role="img">{icon}</div>
    <div role="listitem">{children}</div>
  </>
);

export default ListItem;
