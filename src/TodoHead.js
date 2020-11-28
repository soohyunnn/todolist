import React from 'react';
import './App.css';

function TodoHead(){
    //날짜 satrt
    const today = new Date();
    const dateString =  today.toLocaleDateString('ko-KR', {
       year: 'numeric',
       month: 'long',
       day: 'numeric' 
    });
    const dayName = today.toLocaleDateString('ko-KR', {weekday: 'long'});
    //날짜 end

    return(
        <div className="TodoHeadBlock">
            <h1>Todos</h1>
            <h1>{dateString}</h1>
            <div className="day">{dayName}</div>
        </div>
    )
}

export default TodoHead;