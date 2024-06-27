
import React from 'react';
import { Link } from 'react-router-dom';

const ResidenceItem = ({ residence }) => (
  <div>
    <h3>{residence.name}</h3>
    <p>{residence.description}</p>
    <Link to={`/residence/${residence.id}`}>View Details</Link>
  </div>
);

export default ResidenceItem;
