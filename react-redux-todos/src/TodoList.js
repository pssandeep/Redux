import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { addTodo, removeTodo }  from './actionCreators';
import { Route } from "react-router-dom";
import NewToDoForm from "./NewToDoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.removeTodo = this.removeTodo.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(val){
    this.props.addTodo(val);
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

        <Route  path = "/todos/new" component={props => (
          <NewToDoForm {...props} handleSubmit={this.handleAdd}/>
        )}/>
        <Route exact path = "/todos" component ={()=> <div>{todos}</div>}/>
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
