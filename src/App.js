import React, { useState } from 'react';
import './style.css';
import TodoForm from './TodoForm';
const defaultValue = {
  eventName: '',
  desc: '',
};
export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState({
    ...defaultValue,
  });

  const onChangeHandleForm = (e) => {
    // console.log(e);
    const inputName = e.target.name;
    const val = e.target.value;
    setTodo({ ...todo, [inputName]: val });
  };
  const onSubmit = () => {
    // console.log('onSaveClicked', todo);
    const tempList = [...todoList];
    tempList.push(todo);
    setTodoList(tempList);
    setTodo(defaultValue);
  };

  const onClose = () => {
    console.log('onCloseClicked');
  };

  const onDelete = () => {
    console.log('onDeleteClicked');
  };
  return (
    <TodoForm
      todo={todo}
      onSave={onSubmit}
      onClose={onClose}
      onDelete={onDelete}
      onChange={onChangeHandleForm}
    />
  );
}
