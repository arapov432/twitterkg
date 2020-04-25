import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Switch, Route, Redirect, useLocation } from 'react-router-dom'
import Public from './Public'

export class Nomatch404 extends Component {
    render() {
        return (
            <div>
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
