import React, {useCallback, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";

function TodoItem(){

    const todos1 = [];

    const getTodos = async () => {
        const response = await axios.get(
            '/todos'
        );
        dispatch({
            type : 'aaa',
            response : response.data
        })
        return response.data;
        
    };

    useEffect(()=>{
        getTodos();
    },[]);

    console.log('todos1',todos1);

    const {todos} = useSelector(state => ({
        todos: state.todos
    }));
    const dispatch = useDispatch();

    const onDelete = useCallback((id) => {
        dispatch({
        type: "DELETE_TODO",
        id,
        })
    },[]);

    const onToggle = useCallback((id) => {
        console.log('id',id);
        dispatch({
          type : "TOGGLE_TODO",
          id
        })
      },[]);

    return(
        
        <>
        {todos.map(todo => 
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
        )}
        </>
    )
}

export default TodoItem;