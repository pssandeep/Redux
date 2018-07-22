import React , { Component} from "react";

export default class NewToDoForm extends Component {


  constructor(props){
    super(props);
    this.state = {
      task: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);   
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.task);
    this.setState({ task: "" });
    e.target.reset();
    this.props.history.push("/todos");
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
    render(){

      return(
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
      )
    }


}