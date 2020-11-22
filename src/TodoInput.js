import React, {useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function TodoInput() {
    
    const id = useRef(1);

    const {todos, input} = useSelector(state => ({
        todos: state.todos,
        input: state.input
    }));
    const dispatch = useDispatch();


    //console.log('todos',todos);

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
        console.log('aaa',todos);
        dispatch({
          type : "CREATE_TODO",
          todo : {
            id: id.current,
            text: input,
            action: true,
          }
        });
        id.current += 1;
      },[input]);
    
      const onRemove = useCallback(() => {
        dispatch({
         type: "RESET_INPUT"
       });
      },[])
      
    return (
        <>
            <input onChange={onChange} onKeyPress={onEnterKeyPress} value={input} />   
            <button className="button" onClick={onCreate}>등록</button>
            <button className="button" onClick={onRemove}>초기화</button>
        </>
    );
}

export default TodoInput;