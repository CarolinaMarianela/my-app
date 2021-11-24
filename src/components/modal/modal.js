import React from 'react';
import './modal.css';

const Modal = ({ item, onSetShowModal }) => (
  <div className="modal-container">
      <div className="modal"> 
        <span className="close" onClick={() => onSetShowModal(false)}>x</span>
        <p>{item.title}</p>
        <img src = {item.imageUrl} className="image"/>
      </div>
  </div>
);

export default Modal;
