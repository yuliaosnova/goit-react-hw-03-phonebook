import PropTypes from 'prop-types';
import React from 'react';
import { List } from './FilterStyle';

export const Filter = ({ value, onChange }) => (
  <List>
    <label>Find contacts by name</label>
    <input type="text" value={value} onChange={onChange} />
  </List>
);


Filter.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
 };
