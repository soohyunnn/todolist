import React from 'react';
import './App.css';
import TodoItem from './TodoItem';

function TodoList(){
    return(
        <div className="TodoListBlock">
            <TodoItem text="프로젝트 생성하기" done={true} />
        </div>
    )
    
}

export default TodoList;