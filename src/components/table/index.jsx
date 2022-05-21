import React from "react";
import PropTypes from "prop-types";
import { Input, Table } from "reactstrap";
import CustomButton from "../buttons";

const RowItem = ({ todo, toggleSelect, toggleComplete }) => {
  return (
    <tr>
      <td>
        <Input
          type="checkbox"
          id={todo.id}
          checked={todo.isSelected}
          onChange={() => toggleSelect(todo.id)}
        />
      </td>
      <td> {todo.time.toDateString()} </td>
      <td> {todo.text} </td>
      <td>
        <CustomButton
          id={todo.id}
          isCompleted={todo.isCompleted}
          toggleComplete={toggleComplete}
        />
      </td>
    </tr>
  );
};

RowItem.proptype = {
  todo: PropTypes.object.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

const TableView = ({ todos, toggleSelect, toggleComplete }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th> # </th>
          <th> Time </th>
          <th> Text </th>
          <th> Status </th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <RowItem
            key={todo.id}
            todo={todo}
            toggleSelect={toggleSelect}
            toggleComplete={toggleComplete}
          />
        ))}
      </tbody>
    </Table>
  );
};

TableView.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export default TableView;
