import React from 'react';
import TodoItem from './TodoItem';

function TodoList(){

    return(
        <>
        <h2>♥ List ♥</h2>
        <div style={{padding : 23}} >
            <TodoItem />
        </div>
      </>
    )
    
}

export default TodoList;