import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { addTodo, removeTodo }  from './actionCreators';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state.task);
    this.setState({ task: "" });
    e.target.reset();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    let todos = this.props.todos.map((val, index) => (
      <Todo
        removeTodo={this.removeTodo.bind(this, val.id)}
        task={val.task}
        Key={index}
      />
    ));

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Enter Your Todos"
            name="task"
            id="task"
          />
          <button> Add Todo </button>
        </form>
        <ul>{todos}</ul>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    todos: reduxState.todos
  };
}
export default connect(mapStateToProps, {addTodo, removeTodo})(TodoList);
