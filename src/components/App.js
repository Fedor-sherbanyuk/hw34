import React, {useState,useCallback} from 'react';
import { Form } from './Form';
import {List} from './List';

const initialTodos = [
        {
            id: crypto.randomUUID(),
            text: 'Item 1',
            isDone: false,
        },
        {
            id: crypto.randomUUID(),
            text: 'Item 2',
            isDone: true,
        },
        {
            id: crypto.randomUUID(),
            text: 'Item 3',
            isDone: false,
        },
        {
            id: crypto.randomUUID(),
            text: 'Item 4',
            isDone: true,
        },
    ];
const App=()=>{
    const [todoList, setTodoList] = useState(initialTodos);
    const submitHandler = useCallback((e) => {
        e.preventDefault();
        const todoText = e.target.elements.todoInput.value;
        setTodoList((prevTodos) =>
            prevTodos.concat({
                id: crypto.randomUUID(),
                text: todoText,
                isDone: false,
            })
        );
        e.target.reset();
    }, []);
    const handleDelete = (id) => {
        setTodoList((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
    };
const  toggleCompletedHandler = useCallback((id) => {
    setTodoList((prevTodo) =>
        prevTodo.map((todoItem) => {
            return id === todoItem.id
                ? {
                    ...todoItem,
                    isDone: !todoItem.isDone,
                }
                : todoItem;
        })
    );
},[]);
    return (
        <>
            <List list={todoList} onClickHandler={toggleCompletedHandler} onDelete={handleDelete} />
            <Form submitHandler={submitHandler} />
        </>
    );
};

export default App;
