import React, { Component } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import shortid from "shortid";

import ListView from "../list";
import TableView from "../table";
import Controller from "../controller";
import TodoForm from "../todo-form";

class Todos extends Component {
  state = {
    todos: [
      {
        id: 1,
        text: "Learn React",
        time: new Date(),
        isSelected: false,
        isCompleted: false,
      },
      {
        id: 2,
        text: "Mahiuddin",
        time: new Date(),
        isSelected: false,
        isCompleted: false,
      },
    ],
    isOpenForm: false,
    searchTerm: "",
    view: "list",
    filter: 'all',
  };

  toggleSelect = (toDoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((todo) => todo.id === toDoId);
    todo.isSelected = !todo.isSelected;
    this.setState({ todos });
  };
  toggleComplete = (toDoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((todo) => todo.id === toDoId);
    todo.isCompleted = !todo.isCompleted;
    this.setState({ todos });
  };

  handleSearch = (searchValue) => {
    this.setState({searchTerm: searchValue});
  };
  performSearch = () => {
    return this.state.todos.filter(todo => todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  toggleForm = () => {
    this.setState({
      isOpenForm: !this.state.isOpenForm,
    });
  };
  
  addTodo = (todo) => {
    todo.id = shortid.generate();
    todo.time = new Date();
    todo.isSelected = false;

    this.setState({
      todos: [todo, ...this.state.todos],
    });
    this.toggleForm();
  };

  changeView = (event) => {
    this.setState({
      view: event.target.value,
    });
  };

  handleFilter = filter => {
    
    this.setState({filter})
  };

  performFilter = (todos) =>{
    const {filter} = this.state

    if(filter === 'completed'){
      return todos.filter(todo => todo.isCompleted);
    }else if(filter === 'running'){
      return todos.filter(todo => !todo.isCompleted);
    }else{
      return todos
    }
  }

  clearSelected = () => {
    const todos = this.state.todos.filter(todo => !todo.isSelected)
    this.setState({todos})
  };
  clearCompleted = () => {
    const todos = this.state.todos.filter(todo => !todo.isCompleted)
    this.setState({todos})
  };
  reset = () => {
    this.setState({
      isOpenForm: false,
      searchTerm: "",
      view: "list",
      filter: 'all',
    })
  };

  getView = () => {
    let todos = this.performSearch();
    todos = this.performFilter(todos);
    return this.state.view === "list" ? (
      <ListView
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    ) : (
      <TableView
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    );
  };

  render() {
    return (
      <div>
        <h1 className="display-4 text-center mb-5"> Todos </h1>
        <Controller
          searchTerm={this.state.searchTerm}
          handleSearch={this.handleSearch}
          toggleForm={this.toggleForm}
          filter = {this.state.filter}
          handleFilter={this.handleFilter}
          view={this.state.view}
          changeView={this.changeView}
          clearSelected={this.clearSelected}
          clearCompleted={this.clearCompleted}
          reset={this.reset}
        />

        <div> {this.getView()} </div>

        <Modal isOpen={this.state.isOpenForm} toggle={this.toggleForm}>
          <ModalHeader toggle={this.toggleForm}>Create new todo</ModalHeader>

          <ModalBody>
            <TodoForm addTodo={this.addTodo} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Todos;
