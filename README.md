### todolist


import React from 'react';
import './App.css';
import TodoTemplate from './TodoTemplate';

function App() {
  return (
    <>
    <TodoTemplate/>
    </>
  );
}

export default App;



### Enter 키 이벤트
엔터키 이벤트는 onKeyPress = {내가 만든 이벤트 발생 함수 명} 을 넣어주어야 한다.ex) 예를 들어 input 안에 => `<input onChange={onChange} onKeyPress={onEnterKeyPress} value={input} /> `