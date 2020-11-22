import React, {useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';


function TodoItem(){

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