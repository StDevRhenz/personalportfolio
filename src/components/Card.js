import React from 'react';
import './Card.css'; // We'll create this CSS file next

const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-front">
          <h2>Front Side</h2>
          <p>This is the front of the card.</p>
        </div>
        <div className="card-back">
          <h2>Back Side</h2>
          <p>This is the back of the card.</p>
        </div>
      </div>
    </div>
  );
};

export default Card;