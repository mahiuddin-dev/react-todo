import React from "react";
import { Form, Input, FormGroup, Label, Button } from "reactstrap";
import PropTypes from "prop-types";

class TodoForm extends React.Component {
  state = {
    text: "",
    description: "",
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state);
    event.target.reset();
    this.setState({
      text: "",
      description: "",
    });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="todo">Enter Task</Label>
          <Input
            onChange={this.handleChange}
            type="text"
            name="text"
            id="todo"
            placeholder="Enter todo"
            value={this.state.text}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="todo">Enter Task description</Label>
          <Input
            onChange={this.handleChange}
            type="textarea"
            name="description"
            id="description"
            placeholder="Enter todo description"
            value={this.state.description}
          />
        </FormGroup>
        <Button type="submit">Create Task</Button>
      </Form>
    );
  }
}
TodoForm.proptype = {
    addTodo: PropTypes.func.isRequired
  };
export default TodoForm;
