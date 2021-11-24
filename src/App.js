import React,{ useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import List from './components/list/list';
import Modal from './components/modal/modal';


function App() {
  const [searchValue, setSearchValue] = useState ('');
  const [showmodal, setShowmodal] = useState (false);
  const [selectedCard, setSelectedCard] = useState ({});
  return (
      <div className="app">
        <Sidebar onSearch={setSearchValue}/>
        <div>
        <List onSetShowModal={setShowmodal} onSelectedCard={setSelectedCard} searchValue={searchValue} />
        </div>
        {showmodal === true &&  
          <Modal onSetShowModal={setShowmodal} item={selectedCard}/>
		    } 
      </div>
  );
};

export default App;
