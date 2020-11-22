import React, {useRef, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";


function TodoInput() {

    // const getTodos = async () => {
    //     const response = await axios.get(
    //         'http://localhost:5000/todos'
    //     );

    //     return response.data;
    // };

    // useEffect(()=>{
    //     getTodos();
    // })
    
   

    const {todos, input} = useSelector(state => ({
        todos: state.todos,
        input: state.input
    }));
    const dispatch = useDispatch();
    const id = useRef(todos.length);

    console.log('id',id);

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
        
        axios.post('/todos',{
            id: id.current,
            text: input,
            action: true
        });
        dispatch({
          type : "CREATE_TODO",
          todo : {
            id: id.current,
            text: input,
            action: true,
          }
        });
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