import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

function TodoFooter() {

    const dispatch = useDispatch();

    const onClickAll = useCallback(() => {
        dispatch({
            type: "ALL_TODO",
        })
    },[]);

    const onClickTrue = useCallback(() => {
        dispatch({
            type: "TRUE_TODO",
            action: true
        })
    },[]);

    const onClickFalse = useCallback(() => {
        dispatch({
            type: "FALSE_TODO",
            action: false
        })
    },[]);

    return (
        <>
            <button className="button" onClick={onClickAll}>전체</button>
            <button className="button" onClick={onClickTrue}>진행중</button>
            <button className="button" onClick={onClickFalse}>완료</button>
        </>
    );
}

export default TodoFooter;