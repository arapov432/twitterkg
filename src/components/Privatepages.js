import React, { Component } from 'react'
import Another from './Another';
import {BrowserRouter as Router, Link, Route, 
    Switch, useParams, useRouteMatch } from 'react-router-dom';
import Textpost from './Textpost';
import Public from './Public';

import Nomatch404 from './Nomatch404';
import Sidebar from './Sidebar';
import pp from './pp.jpeg'
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
           
               <div className="container">
                   <div className="row">
            <div className="col-sm-4">
            <div className="card">
                <img src={pp} className="card-img-top" alt="Cardimage" />
                <div className="card-body">
                    <h4 className="card-title">Azamat Arapov</h4>
                    <p className="card-text">Some example like lorem ipsum</p>
                    <Link to="#" className="btn btn-primary">See Profile</Link>
                </div>
                </div>
                </div> 
                <div className="col-sm-8">
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
                </div>
            </div>
        )
    }
}
  const  Home =()=>{
        return (
           
        <Router>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
        <li className="nav-item active">
            <Link to="/home" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
            <Link to="/nests" className="nav-link">Text Post</Link>
        </li>
        <li className="nav-item">
            <Link to="/nomatch" className="nav-link">No Match Links</Link>
        </li>
        <li className="nav-item">
            <Link to="/sidebar" className="nav-link"> Side bar Links</Link>
        </li>
    </ul>
    </nav>
    <Switch>
        <Route exact path="/home">
            <h1>Select the link</h1>
        </Route>
        <Route path="/about"><About/></Route>
        <Route path="/nests" children={<Textpost/>}/>
        <Route path="/nomatch" children={<Nomatch404/>}/>
        <Route path="/sidebar" children={<Sidebar/>}/>
    </Switch>
</Router>    
        )
}
 const  About=()=>{
        let {url, path}= useRouteMatch();
        return (
            <div>
             
               <Router>
          

               <div>
                    <ul>
                        <li className="btn btn-outline-primary">
                            <Link to={`${url}/another`}>Anothers JS Page</Link>
                        </li>
                        <li className="btn btn-outline-primary">
                            <Link to={`${url}/text`}>Text post Page</Link>
                        </li>
                        <li className="btn btn-outline-primary">
                            <Link to={`${url}/public`}>Public page</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path={path}>
                            <h1>Click the link below!</h1>
                        </Route>
                       
        <Route path={`${path}/another`} children={<Another/>}/>
                        
        <Route path={`${path}/text`} children={<Textpost/>}/>
                        
                        <Route path={`${path}/public`} children={<Public/>}/>
                        
                        <Route path={`${path}/:ids`} children={<Topics/>}/>
                     
                     
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
