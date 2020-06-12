import React, { Component } from 'react'

import {BrowserRouter as Router, Link, Route, 
    Switch } from 'react-router-dom';



import Nomatch404 from './Nomatch404';
import Sidebar from './Sidebar';
import pp from './pp.jpeg'
export class Privatepages extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

        }
    }
    render() {
        return (
           
               <div className="container-fluid">
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
             
          <h1>This is Private pages </h1>
          <div className="row">
            <div className="col-lg-6 textcenter">
                
            <h1>This is public Pages</h1>
            <p> In this blog, we will learn about how to create a live<br/>
            search input field, which fetches the result as the user <br/>
            types in the query. Of all the results available for that<br/>
            query, we will only fetch 20 results. We will create a <br/>
            pagination for the user to navigate to the next or previous<br/>
            20 results, until no further results are available.
            </p>
            
            </div>
            <div className="col-lg-6 textcenter">
            <h1>This is public Pages</h1>
            <p> In this blog, we will learn about how to create a live<br/>
            search input field, which fetches the result as the user <br/>
            types in the query. Of all the results available for that<br/>
            query, we will only fetch 20 results. We will create a <br/>
            pagination for the user to navigate to the next or previous<br/>
            20 results, until no further results are available.
            </p></div>
            
        </div> 
          <Home/>
                </div>
                </div>
            </div>
        )
    }
}
  const  Home =()=>{
        return (
           
        <Router>
            <nav className="navbar bg-dark navbar-dark">
        <ul className="navbar-nav">
        
        
        <li className="nav-item">
            <Link to="/nomatch" className="nav-link">No Match Links</Link>
        </li>
        <li className="nav-item">
            <Link to="/sidebar" className="nav-link"> Side bar Links</Link>
        </li>
    </ul>
    </nav>
    <Switch>
       

        <Route path="/nomatch" children={<Nomatch404/>}/>
        <Route path="/sidebar" children={<Sidebar/>}/>
    </Switch>
</Router>    
        )
}



export default Privatepages
