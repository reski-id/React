import React, {useState} from 'react';
import './App.css';
import TodoTables from './components/TodoTables';

function App() {
  const [todos, setTodos]  =  useState(
    [
      {RowsNumber : 1, RowsItems: "Feed Cat", RowsAssigned : "User One"}, 
      {RowsNumber : 2, RowsItems: "Get Haircut", RowsAssigned : "Thor"}, 
      {RowsNumber : 3, RowsItems: "Water Plants", RowsAssigned : "User One"}, 
      {RowsNumber : 4, RowsItems: "Charge Phone Battery", RowsAssigned : "Thor"}, 
    ]
  
  )
  const addTodo = () =>{
    if (todos.length>0){
      const newTodo = {
        RowsNumber : todos.length+1, RowsItems: "Think todo", RowsAssigned : "From Click Event"
      }
      setTodos(todos => [...todos, newTodo]);
    }
  }
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
        Your Todo's
        </div>
        <div className='card-body'>
          <TodoTables todos={todos}/>
          <button className='btn btn-primary' onClick={
            addTodo
          }>
            Add New Todo</button>
        </div>
      </div>
    </div>
  );
}

export default App;