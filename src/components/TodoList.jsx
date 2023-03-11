import React from 'react'
import './TodoList.css'
import {FaRegTrashAlt} from "react-icons/fa";
const TodoList = ({todo , toggleComplete, deleteTodo}) => {
  return (
    <div className = "mytodo">
        <input type="checkbox" onChange ={()=>toggleComplete(todo)} checked = { todo.completed ? "checked" : "" }/>
        <p  onClick = {()=>toggleComplete(todo)} className ={ todo.completed ? "p1" : "p" }>{todo.text}</p>
        <button onClick = {()=>deleteTodo(todo.id)} className="trash-btn"><FaRegTrashAlt/></button>
    </div>
  );
}

export default TodoList;
