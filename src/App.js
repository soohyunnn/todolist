import React, {useEffect} from 'react';
import axios from "axios";
import './App.css';

import TodoTemplate from './TodoTemplate';

function App() {

  useEffect(()=>{
    const response = axios.get('http://localhost:3003/api');
    response.then(res => console.log('res',res.data));

  })

  return (
    <>
    <div className="App">
      <TodoTemplate />
    </div>
    
    </>
  );
}

export default App;
