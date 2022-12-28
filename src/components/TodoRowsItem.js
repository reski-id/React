function TodoRowsItem(props) {
    return (
        <tr>
            <th scope="row">{props.RowsNumber}</th>
            <td>{props.RowsItems}</td>
            <td>{props.RowsAssigned}</td>
        </tr>
    )
}

export default TodoRowsItem