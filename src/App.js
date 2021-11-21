import React,{ useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import List from './components/list/list';
import Mock from './mock/response.json';


function App() {
  const [searchValue, setSearchValue] = useState ('');
  return (
    <div className="app">
        <Sidebar onSearch={setSearchValue}/>
        <div>
         <List searchValue={searchValue} />
        </div>
    
    </div>
  );
};

export default App;
