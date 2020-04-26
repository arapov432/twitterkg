import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Switch, Route, Redirect, useLocation } from 'react-router-dom'
import Public from './Public'

export class Nomatch404 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Lastname: '',
             age: null
        }
    }
    mySubmit=(event)=>{
        event.preventDefault();
        let age =this.state.age;
        if(!Number(age)){
            alert("You have to enter numbers! ");
        }
    }
    myChangess=(event)=>{
        let nam = event.target.name;
        let val = event.target.value;
      //  if(nam == "age"){
        //    if(!Number(val))
          //  {
            //    alert("You have to enter numbers! ");
            //}
        //}
        this.setState({[nam] : val});
    }
    render() {
        let names;
        if(this.state.Lastname){
        names=<p>Welcome Mr/Mrs. {this.state.Lastname} .Your age is {this.state.age}</p>
        }
        else{
            names="";
        }
        return (
            <div>
                <form onSubmit={this.mySubmit}>
                    {names}
                    <p>Enter your Last name: </p>
                    <input type="text" onChange={this.myChangess} name="Lastname"/>
                    <input type="text" onChange={this.myChangess} name="age"/>
                 <input type="submit" />
                </form>
                <Router>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/will-match">Will Match</Link>
                        </li>
                        <li>
                            <Link to="/old-match">Old Match</Link>
                        </li>
                        <li>
                            <Link to="/not-match">No Match</Link>
                        </li>
                        <li>
                            <Link to="/aslo/not/match"> Also No Match</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path="/"><Public/></Route>
                    <Route path="/will-match"><WillMatch/></Route>
                        <Route path="/old-match"><Redirect to="/will-match"></Redirect></Route>
                    <Route path="*"><NoMatch/></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

function WillMatch(){
    return <h1>Will Match</h1>
}
function NoMatch(){
    let location = useLocation();
    return (<h1>No Match {location.pathname};</h1>)
}
export default Nomatch404
