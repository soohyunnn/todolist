import React from 'react';
import './App.css';
import TodoFooter from './TodoFooter';
import TodoHead from './TodoHead';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function TodoTemplate(){
    return(
        <>
            <TodoHead />
            <TodoInput />
            <TodoList />
            <TodoFooter />
        </>
    )
}

export default TodoTemplate;