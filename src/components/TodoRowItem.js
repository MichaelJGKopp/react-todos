function TodoRowItem() {
  
    const rowNumber = 1;
    const rowDescription = "Feed dog";
    const rowAssigned = "Eric"

    
    return (
    // can only return one element, wrap in div if necessary
      <tr>
        <th scope="row">{rowNumber}</th>
        <td>{rowDescription}</td>
        <td>{rowAssigned}</td>
      </tr>
  );
}

export default TodoRowItem;
