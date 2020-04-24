import React, { Component } from 'react'

export class Public extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             firstName: ''
        }
    }
    submitHandler=(event)=>{
        event.preventDefault();
        alert("You submitted your name as " +this.state.firstName);
    }
    myChangeHandler=(event)=>{
        this.setState({firstName: event.target.value});
    }
    
    render() {
        return (
        
            <div>
                <h1>This is public Pages</h1>
                <form onSubmit={this.submitHandler}>
                    <h1>Your name is here {this.state.firstName}</h1>
                    <p>Enter your name and submit</p><br/>
                    <input type="text" onChange={this.myChangeHandler}></input>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}

export default Public
