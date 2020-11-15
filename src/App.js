import React, { useState, useRef } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState('');

  const [todos, setTodos] = useState([]);

  const id = useRef(1);

  const onEnterKeyPress = (e) => {
    if (e.key === 'Enter'){
      onCreate();
    }
  }

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onCreate = (e) => {
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

  const onDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <>
    <div className="App">
      <h1>Todos</h1>
      <input onChange={onChange} onKeyPress={onEnterKeyPress} value={input} />   
      <button className="button" onClick={onCreate}>등록</button>
      <button className="button" onClick={onRemove}>초기화</button>
      <h2>♥ List ♥</h2>
      <div>
        
          {todos.map(todo => 
            <>
            <div className="todolist">
              <li style={{listStyle: 'none'}} key={todo.id}>{todo.text}
              <button onClick={()=> onDelete(todo.id)} className="XButton">X</button>
              </li>
            </div>  
            </>
          )}
  
        
      </div>
    </div>
    
    </>
  );
}

export default App;
