import React from 'react';
import './card.css';

const Card = ({ item, onSetShowModal, onSelectedCard}) => (
  <div onClick={() => {onSetShowModal(true); onSelectedCard(item)}} className="card-container" style={{ backgroundImage: `url(${item.imageUrl })` }}></div>
);

export default Card;
