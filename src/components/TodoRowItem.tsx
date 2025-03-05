import React from "react";

export const TodoRowItem: React.FC<{  
  rowNumber: number,
  rowDescription: string,
  rowAssigned: string,
  deleteTodo: Function}> = (props) => {
  return (
    // can only return one element, wrap in div if necessary
    <tr onClick={() => {}}>
      {/* FIXME: add onClick event */}
      <th scope="row">{props.rowNumber}</th>
      <td>{props.rowDescription}</td>
      <td>{props.rowAssigned}</td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => props.deleteTodo(props.rowNumber)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TodoRowItem;
