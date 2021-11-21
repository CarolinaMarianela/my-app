import React, { useEffect, useState } from 'react';
import Card from '../card/card';
import mock from '../../mock/response.json';
import './list.css';

const List = ({ searchValue }) => {
  const [filteredMock, setFilteredMock] = useState(mock);
   useEffect(() => {
      if (searchValue !==' ') {
         setFilteredMock(mock.filter(({title}) => {
           return (title.toLowerCase().includes(searchValue.toLowerCase()))
         }))
      }
   }, [searchValue, setFilteredMock]);

   return (
      <div className= "card-box">
         {filteredMock.map(item => <Card item={item} />)}
      </div>
   );
};


export default List;
