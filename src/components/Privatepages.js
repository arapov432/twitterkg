import React, { Component } from 'react'
import Another from './Another';
import {BrowserRouter as Router, Link, Route, 
    Switch, useParams, useRouteMatch } from 'react-router-dom';
import Textpost from './Textpost';
import Public from './Public';

export class Privatepages extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            firstName:'',
             username: ''
        }
    }
    myChangehandler=(event)=>{
        let values = event.target.value;
        let names = event.target.name;
       
            
        this.setState({[names]: values});
    }
    render() {
        return (
            <div>
    <Home/>
    <h1>This is Private pages </h1>
                <form>
                    <h1>Hello, Welcome to JS! </h1><h1>{this.state.firstName} </h1>
                    <h1>Your username is: {this.state.username}</h1>
                    <h3>Enter your name</h3>
                    <input type="text" name="firstName" onChange={this.myChangehandler}></input>
                    <h3>Enter your password</h3>
                    <input type="text" name="username" onChange={this.myChangehandler}></input>
                
                </form>
            </div>
        )
    }
}
  const  Home =()=>{
        return (
        <Router>
        <ul>
        <li>
            <Link to="/home">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
    </ul>
    <Switch>
        <Route exact path="/home">
            <h1>Select the link</h1>
        </Route>
        <Route path="/about"><About/></Route>
    </Switch>
</Router>    )
}
 const  About=()=>{
        let {url, path}= useRouteMatch();
        return (
            <div>
             
               <Router>
          

               <div>
                    <ul>
                        <li>
                            <Link to={`${url}/another`}>Anothers JS Page</Link>
                        </li>
                        <li>
                            <Link to={`${url}/text`}>Text post Page</Link>
                        </li>
                        <li>
                            <Link to={`${url}/public`}>Public page</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path={path}>
                            <h1>Click the link below!</h1>
                        </Route>
                       
                        <Route path={`${path}/another`}>
                        <Another/>
                        </Route>
                        <Route path={`${path}/text`}>
                        <Textpost/>
                        </Route>
                        <Route path={`${path}/public`}>
                        <Public/>
                        </Route>
                        <Route path={`${path}/:ids`}><Topics/>
                     
                     </Route>
                    </Switch>
                    </div>
                </Router>
               
                
            </div>
        )
    }


const Topics=()=>{
    let {ids} = useParams();
    return (
<h1>Your page id is : {ids}</h1>
    )
}
export default Privatepages
