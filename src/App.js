import React, { useState, useRef } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState('');

  const [todos, setTodos] = useState([]);

  const id = useRef(1);

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onCreate = () => {
    const todo  = {
      id : id.current,
      text : input
    }

    setTodos([
      ...todos,
      todo
    ])

    setInput('')
    id.current++;
  }

  const onRemove = () => {
    setInput('')
  }

  return (
    <>
    <div className="App">
      <h1>TodoList</h1>
      <input onChange={onChange} value={input} />
      <button onClick={onCreate}>등록</button>
      <button onClick={onRemove}>초기화</button>
      <h2>List</h2>
      <div>
        
          {todos.map(todo => <li style={{listStyle: 'none'}} key={todo.id}>{todo.text}</li>)}
  
        
      </div>
    </div>
    
    </>
  );
}

export default App;
