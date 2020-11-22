import React, {useRef, useEffect, useReducer, useCallback } from 'react';
import axios from "axios";
import './App.css';




const initialState = {
  input : '',
  todos: []
}

function reducer(state, action) {
  switch(action.type){
    case "CHANGE_INPUT":
      return {
        ...state,
        input : action.value,
      };
    case "RESET_INPUT":
      //console.log(state.input);
      return {
        ...state,
        input: ''
      };
    case "CREATE_TODO":
      //console.log(state.todos);
      return {
        input: initialState.input,
        todos: state.todos.concat(action.todo),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos : state.todos.filter(todo => todo.id !== action.id)
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos : state.todos.map(todo => 
          todo.id === action.id ? {...todo, action : !todo.action} : todo
        )
      }
    default:
      return state;
  }
}

async function getTodos() {
  const response = await axios.get(
    "/todos"
  );
  console.log(response.data);
  return response.data;
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const id = useRef(1);
  const {todos} = state;

  useEffect(()=> {
    getTodos();
  },[])

  const onEnterKeyPress = (e) => {
    if (e.key === 'Enter'){
      onCreate();
    }
  }

  const onChange = useCallback(e => {
    const {value} = e.target;
    dispatch({
      type : "CHANGE_INPUT",
      value
    });
  }, []);

  const onCreate = useCallback(() => {
    dispatch({
      type : "CREATE_TODO",
      todo : {
        id: id.current,
        text: state.input,
        action: true,
      }
    });
    id.current += 1;
  },[state.input]);

  const onRemove = useCallback(() => {
   dispatch({
     type: "RESET_INPUT"
   });
  },[])

  const onDelete = useCallback((id) => {
   dispatch({
     type: "DELETE_TODO",
     id,
   })
  },[todos]);

  const onToggle = useCallback((id) => {
    console.log('id',id);
    dispatch({
      type : "TOGGLE_TODO",
      id
    })
  },[todos]);

  return (
    <>
    <div className="App">
      <h1>Todos</h1>
      <input onChange={onChange} onKeyPress={onEnterKeyPress} value={state.input} />   
      <button className="button" onClick={onCreate}>등록</button>
      <button className="button" onClick={onRemove}>초기화</button>
      <h2>♥ List ♥</h2>
      <div>
          {todos.map(todo => 
            <>
            <div className="todolist">
              <li
                style={{color : todo.action === true ? 'green' : 'purple'}} 
               key={todo.id} 
               onClick={() => onToggle(todo.id)}
               >
                 {todo.text}
              <button
               onClick={()=> onDelete(todo.id)} 
               className="XButton"
               >
                 X
              </button>
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
