import React, { Component } from 'react'
import '/Users/superadmin/Documents/ReactApp/twitterkg/src/App.css';

export default class Todolist extends Component {
constructor(){
  super()
  this.state = {
   inputTask: ' ',
   todos: [],
  
  }
}
addTask=()=>{
  const {inputTask} = this.state;
  const newTodos = this.state.todos;
  //add task into state
  const task = {
    name: inputTask,
    done: false
  }
  newTodos.push(task)

  //this.state.todos.push(inputTask);
  //clear task
  this.setState({todos: newTodos})
  this.setState({inputTask:' '})
}
 onKeyUp=(event)=>{
   const {value: inputTask} = event.target;
   //store value inside state
   this.setState({inputTask})
 }
delete=(ind)=>{
 const {todos}= this.state;
 todos.splice(ind, 1)
 this.setState({todos})
}
done=(ind)=>{
  const {todos}= this.state;
  todos[ind].done = !todos[ind].done;
  this.setState({todos})
 }
clearAll =()=> this.setState({todos:[]})

  render() {
    return (
      <div className="acontainer">
        <h1>TO-DO List</h1>
        <div className="anew-task">
          <input value={this.state.inputTask} onChange={this.onKeyUp} placeholder="Add new tasks"></input>
          <button className="btnss add" onClick={this.addTask}>Add</button>
        </div>
        <div className="contnt">
        <ul>{
          this.state.todos.map( (todo, ind)=>{
            const cross = todo.done ? 'crossed' : '';
            return (
              <li key={ind} id="listtodo" className={cross}>
                <input onClick={()=>this.done(ind)} type="checkbox"/>
                {todo.name}
                 <span onClick={()=>this.delete(ind)} className="delete">X</span>
                 </li>
            )
          })
         } 


</ul>
<button onClick={this.clearAll} className="btnss clear">Clear</button>
        </div>
      </div>
    )
  }
}

