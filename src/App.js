
import './App.css';
import TodoRowsItem from './components/TodoRowsItem';

function App() {
  const todos  = [
    {RowsNumber : 1, RowsItems: "Feed Cat", RowsAssigned : "User One"}, 
    {RowsNumber : 2, RowsItems: "Get Haircut", RowsAssigned : "Thor"}, 
    {RowsNumber : 3, RowsItems: "Water Plants", RowsAssigned : "User One"}, 
  ]
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
        Your Todo's
        </div>
        <div className='card-body'>
          <table className='table table-hover'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Description</th>
              <th scope='col'>Asign</th>
            </tr>
          </thead>
          <tbody>
            <TodoRowsItem 
                RowsNumber={todos[0].RowsNumber} 
                RowsItems={todos[0].RowsItems} 
                RowsAssigned={todos[0].RowsAssigned} />
            <TodoRowsItem 
                RowsNumber={todos[1].RowsNumber} 
                RowsItems={todos[1].RowsItems} 
                RowsAssigned={todos[1].RowsAssigned} />
            <TodoRowsItem 
                RowsNumber={todos[2].RowsNumber} 
                RowsItems={todos[2].RowsItems} 
                RowsAssigned={todos[2].RowsAssigned} />
          </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;