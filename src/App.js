import './App.css';
import TodoTables from './components/TodoTables';

function App() {
  const todos  = [
    {RowsNumber : 1, RowsItems: "Feed Cat", RowsAssigned : "User One"}, 
    {RowsNumber : 2, RowsItems: "Get Haircut", RowsAssigned : "Thor"}, 
    {RowsNumber : 3, RowsItems: "Water Plants", RowsAssigned : "User One"}, 
    {RowsNumber : 4, RowsItems: "Charge Phone Battery", RowsAssigned : "Thor"}, 
  ]
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
        Your Todo's
        </div>
        <div className='card-body'>
          <TodoTables todos={todos}/>
        </div>
      </div>
    </div>
  );
}

export default App;