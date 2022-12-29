/* eslint-disable no-undef */
import TodoRowsItem from "./TodoRowsItem"

function TodoTables (props){
    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="rows">#</th>
                    <th scope="rows">Description</th>
                    <th scope="rows">Asigned</th>
                </tr>
            </thead>
            <tbody>
            {props.todos.map(
                todos => (
                    <TodoRowsItem
                        key={todos.RowsNumber}
                        RowsNumber = {todos.RowsNumber}
                        RowsItems  = {todos.RowsItems}
                        RowsAssigned = {todos.RowsAssigned}
                    />
                )
            )}
            </tbody>
        </table>
    )
}

export default TodoTables