import React from 'react';
import './App.css';

function TodoHead(){
    return(
        <div className="TodoHeadBlock">
            <h1>2020년 11월 13일</h1>
            <div className="day">금요일</div>
            <div className="tasks-left">할 일 2개 남음</div>
        </div>
    )
}

export default TodoHead;