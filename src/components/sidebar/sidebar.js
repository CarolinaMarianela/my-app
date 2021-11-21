import React from 'react';
import './sidebar.css';

const Sidebar = ({onSearch}) => {
  //const setSearchValue = props.setSearchValue;
  //const handleOnChange= event => {onSearch(event.target.value);
      

  return (
    <div className="sidebar-container">
      <p>¿Qué quieres escuchar?</p>
      <div>
        <input className="buscar" onChange={event => {
          const value = event.target.value;
          onSearch(value);
        }} placeHolder="Buscar"/>
      </div>
      <button className="button">Enter</button>
    </div>

  )
};
 

export default Sidebar;