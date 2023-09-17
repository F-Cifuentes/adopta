import React from 'react';
import Tags from './Tags';

function Card({ imageSrc, name, description }) {
  return (
    <div className="card">
      <img src={imageSrc} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        
      </div>
    </div>
  );
}

export default Card;
