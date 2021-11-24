import React, { useEffect, useState } from 'react';
import Card from '../card/card';
import mock from '../../mock/response.json';
import './list.css';

const List = ({ searchValue, onSetShowModal,onSelectedCard }) => {
  const [filteredMock, setFilteredMock] = useState(mock);
   useEffect(() => {
      if (searchValue !==' ') {
         setFilteredMock(mock.filter(({title}) => {
           return (title.toLowerCase().includes(searchValue.toLowerCase()))
         }))
      }
      console.log(onSetShowModal);
   }, [searchValue, setFilteredMock]);

   return (
      <div className= "card-box">
         {filteredMock.map(item => <Card onSetShowModal={onSetShowModal} item={item} onSelectedCard={onSelectedCard}/>)}
      </div>
   );
};


export default List;
