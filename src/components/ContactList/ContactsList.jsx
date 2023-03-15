import PropTypes from 'prop-types';
import React from 'react';
import { List, Button } from './ContactListStyle';

export const ContactList = ({ data, onDelete }) => {
  return (
    <List>
      {data.map(item => (
        <li key={item.id}>
          <span className="name">{item.name}: </span>
          <span className="number">{item.number}</span>
          <Button onClick={() => onDelete(item.id)}>
            {'\u00D7'}
          </Button>
        </li>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  data: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
