function TodoRowItem(props) {
  
    return (
    // can only return one element, wrap in div if necessary
      <tr>
        <th scope="row">{props.rowNumber}</th>
        <td>{props.rowDescription}</td>
        <td>{props.rowAssigned}</td>
      </tr>
  );
}

export default TodoRowItem;
