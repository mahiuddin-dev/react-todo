import React from "react";
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem, Input } from "reactstrap";

import CustomButton from "../buttons";

const ListItem = ({ todo, toggleSelect, toggleComplete }) => {
  return (
    <ListGroupItem className="d-flex align-items-center">
      <Input
        type="checkbox"
        id={todo.id}
        checked={todo.isSelected}
        onChange={() => toggleSelect(todo.id)}
      />
      <div className="mx-3">
        <h4>{todo.text}</h4>
        <p> {todo.time.toDateString()} </p>
      </div>

      <CustomButton
        id={todo.id}
        isCompleted={todo.isCompleted}
        toggleComplete={toggleComplete}
      />
    </ListGroupItem>
  );
};
ListItem.proptype = {
  todo: PropTypes.object.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

class ListView extends React.Component {
  render() {
    const { todos, toggleSelect, toggleComplete } = this.props;
    return (
      <ListGroup>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            todo={todo}
            toggleSelect={toggleSelect}
            toggleComplete={toggleComplete}
          />
        ))}
      </ListGroup>
    );
  }
}

ListView.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export default ListView;
