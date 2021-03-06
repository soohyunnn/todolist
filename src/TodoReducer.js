
//resucer 분리는 복붙해서 export만 해주면 된다.
//사용하려는 곳에서 import {reducer, initialState} from './TodoReducer'; 해서 사용하면 된다.
export const initialState = {
    input : '',
    todos: [],
    imsiTodos: [],
}

export function reducer(state=initialState, action) {

  switch(action.type){
    case "aaa" : {
        console.log('aaa',action.response)
        return{
            ...state,
            todos : action.response
        }
    }
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
        imsiTodos : state.todos.concat(action.todo),
        
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos : state.todos.filter(todo => todo.id !== action.id),
        imsiTodos : state.todos.filter(todo => todo.id !== action.id)
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos : state.todos.map(todo => 
          todo.id === action.id ? {...todo, action : !todo.action} : todo
        ),
        imsiTodos : state.todos.map(todo => 
            todo.id === action.id ? {...todo, action : !todo.action} : todo
        )
      }
    case "ALL_TODO":
        return {
            ...state,
            todos : state.imsiTodos
        };
    case "TRUE_TODO":
        return {
            ...state,
            todos : state.imsiTodos.filter(todo => todo.action === true)
        };
    case "FALSE_TODO":
        return {
            ...state,
            todos : state.imsiTodos.filter(todo => todo.action === false)
        };
    default:
      return state;
  }
}




