
import React from 'react';
import ResidenceItem from './ResidenceItem';

const ResidenceList = ({ residences }) => (
  <div>
    {residences.map(residence => (
      <ResidenceItem key={residence.id} residence={residence} />
    ))}
  </div>
);

export default ResidenceList;
