/* eslint-disable no-undef */
import TodoRowsItem from "./TodoRowsItem"

function TodoTables (props){
    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="rows">1</th>
                    <th scope="rows">Description</th>
                    <th scope="rows">Asigned</th>
                </tr>
            </thead>
            <tbody>
            <TodoRowsItem 
                //props.todos in this line get data from const todo in App.js
                RowsNumber={props.todos[0].RowsNumber} 
                RowsItems={props.todos[0].RowsItems} 
                RowsAssigned={props.todos[0].RowsAssigned} />
            <TodoRowsItem 
                RowsNumber={props.todos[1].RowsNumber} 
                RowsItems={props.todos[1].RowsItems} 
                RowsAssigned={props.todos[1].RowsAssigned} />
            <TodoRowsItem 
                RowsNumber={props.todos[2].RowsNumber} 
                RowsItems={props.todos[2].RowsItems} 
                RowsAssigned={props.todos[2].RowsAssigned} />
            </tbody>
        </table>
    )
}

export default TodoTables