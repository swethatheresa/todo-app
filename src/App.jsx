import { useState,useEffect } from 'react'
import {db} from './firebase'
import './App.css'
import TodoList from './components/TodoList'
import {AiOutlinePlus} from "react-icons/ai";
import { collection, query, doc, onSnapshot ,updateDoc, deleteDoc, addDoc} from "firebase/firestore";
function App() { 
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  //Create todos
  const createTodo = async (e) => {
    e.preventDefault();
    if(input=='')
    {
        alert('Please enter a valid todo');
        return;
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput("");
  };
  //Read todos from firebase
  useEffect(() => {
     const q = query(collection(db, "todos"));
     const temp =onSnapshot(q, (querySnapshot) => {
        let todoArr=[];
        querySnapshot.forEach((doc) => {
            todoArr.push({...doc.data(),id:doc.id})
        });
        setTodos(todoArr);
    });
    return () => temp ();
  } , []); 
  //Update todos in firebase
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed,
    });
  };
  //Delete todos from firebase 
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
    };



  const handleChange = (e) => {
      setInput(e.target.value);
  }
  return (
    <div className="todo">
        <div className='todo1'>
            <div className="todo-form">
                <h1>My Todo App</h1>
                <form onSubmit={ createTodo }className='input1'>
                    <input type="text" placeholder="Add a todo" name="text" value={input} onChange={handleChange} className="todo-input" />
                    <button className="todo-button" ><AiOutlinePlus/></button>
                </form>
            </div>
            <div className='list'>
                {todos.map((todo) => (
                <TodoList todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
                ))}
                <p className='line'>{`You have ${todos.length} todos`}</p>
            </div>
        </div>
    </div>
    )
}

export default App
