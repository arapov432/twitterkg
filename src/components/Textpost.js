import React, { Component } from 'react'

export class Textpost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             titles: "Titles goes here",
             texts: "Post texts ...",
             datess: "Time and date: today 12:00"
        }
    }
    evenHand =(event)=>{
        event.preventDefault();
        let tite = event.target.name;
        let txt = event.target.value;
        this.setState({[tite]: txt});
//        this.setTimeout((e)=>{this.setState({[tite]: txt})}, 1000);
    }
 
    render() {
        return (
            <div>
                <h1>This is blog post page</h1>
                <p>{this.state.titles}</p><br/>
                <p>{this.state.texts}</p><br/>
                <p>{this.state.datess}</p><br/>
                <input type="text" name="titles" onChange={this.evenHand}></input>
                <br/>
                <input type="text" name="texts" onChange={this.evenHand}></input>
            <button type="button" onClick={this.evenHand}>Post news</button>
            </div>
        )
    }
}

export default Textpost
