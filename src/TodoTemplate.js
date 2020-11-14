import React from 'react';
import './App.css';
import TodoHead from './TodoHead';
import TodoList from './TodoList';

function TodoTemplate(){
    return(
        <div className="TodoTemplateBlock">
            <TodoHead />
            <TodoList />
        </div>
    )
}

export default TodoTemplate;