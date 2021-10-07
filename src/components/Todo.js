import React from 'react';
import Addtask from './Addtask';
import Demo from "../mock/Mock";
class Todo extends React.Component {
  state = {
    todos: [],
  }
  addtodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos,
      })
  }  
   render(){
      return(
        <figure className="position-relative">
        
    <div className="div_class">
        <h1 >{this.props.Content.heading} </h1><br/><br/>
        <div >
       <Addtask addtodo={this.addtodo} />
    </div>
     </div>
     </figure>
    );
      }
  }
  Todo.defaultProps={Content: Demo}
  export default Todo;