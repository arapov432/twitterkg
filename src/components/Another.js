import React, { Component } from 'react';


export class Another extends Component {

          constructor(props) {
              super(props)
          
              this.state = {
                show: true
              }
          }
          
    

    delHandler=()=>{
      this.setState({show:false});
    }
    render() {
        let headers;
        if(this.state.show){
            headers = <Childss/>;
        }
        return (
         <div>
             {headers}
             <button type="button" onClick={this.delHandler}>Delete</button>
         </div>
        )
    }
}
class Childss extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             users: "",
             age: null,
             color: "blue"
        }
    }
    mySumbitHandler=(event)=>{
        event.preventDefault();
        let age =this.state.age;
        if(!Number(age)){
            alert("You have to enter numbers!");
        }
       
    }
    componentDidMount(){
        setTimeout(()=>{this.setState({color: "Yellow"})}, 1000)
    }
    myChangehandler=(event)=>{
        let names = event.target.name;
        let values = event.target.value;
        this.setState({[names]: values})
    }
render(){
    return (
        <div className="container">
        <h1>Another Javascript pages</h1>
        
        <form onSubmit={this.myChangehandler} method="post">
        <h2>Hello Mr/Mrs {this.state.users}</h2>
        <h2>Your age is : {this.state.age}</h2>
        <p id="demo"></p>
<h1> The color is {this.state.color}</h1>
            <p>Enter your name: </p><br/>
            <input type="text" name="users" onChange={this.myChangehandler}></input>
        <p>Enter your age between 0 to 100!</p><br/>
        <input type="text" min="0" max="100" name="age" onChange={this.myChangehandler}/>
        <br/><br/>
        <input type="submit"/>
        </form>
    
    </div>
    )
}
}
export default Another
