import React, { Component } from 'react'

export class Registeration extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user: "",
             fname:"",
             lname:"",
             email:"",
             gender:"",
             birth:"",
             passw:""
        }
    }
myChange =(event)=>{
let names = event.target.name;
let values = event.target.value;
let err;
if(names === "birth"){
    if(values !== " " && !Number(values)){
        err =<h3>You have to enter numbers</h3>;
    }
}
this.setState({err});
this.setState({[names]: values});
}
    
    render() {
        return (
            <div>
                <form>
                    <h3>Enter your user name!</h3><br/>
                    <input type="text" name="user" onChange={this.myChange}/><br/>
                    <h3>Enter your first name!</h3><br/>
                    <input type="text" name="fname" onChange={this.myChange}/><br/>
                    <h3>Enter your last name!</h3><br/>
                    <input type="text" name="lname" onChange={this.myChange}/><br/>
                    <h3>Enter your email!</h3><br/>
                    <input type="email" name="email" onChange={this.myChange}/><br/>
                    <h3>Enter your gender!</h3><br/>
                    <input type="text" name="gender" onChange={this.myChange}/><br/>
                    <h3>Enter your date of birth!</h3><br/>
                    <input type="text" name="birth" onChange={this.myChange}/><br/>
                    {this.state.err}
                    <h3>Enter your password!</h3><br/>
                    <input type="password" name="passw" onChange={this.myChange}/><br/>
                </form>
                <h1>Your all data entered </h1><br/>
        <h4>User name: {this.state.user}</h4>
        <h4>First name is {this.state.fname}</h4>
        <h4>Last name is {this.state.lname}</h4>
        <h4>Email: {this.state.email}</h4>
            </div>
        )
    }
}

export default Registeration
