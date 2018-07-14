import React, { Component } from "react";
import Todo from "./Todo";
import {connect } from "react-redux";

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let todos = this.props.todos.map((task, index) => (
      <Todo task={task} Key={index} />
    ));

    return (
      <div>
        <ul>{todos}</ul>
      </div>
    );
  }
}

function mapStateToProps(reduxState){
  return {
    todos: reduxState.todos
  };
}
export default connect(mapStateToProps)(TodoList);
