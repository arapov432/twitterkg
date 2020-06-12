import React from 'react';

import PrivatePages from './components/Privatepages';
import {BrowserRouter as Router, Route, Link, Switch, useHistory, Redirect, useLocation} from 'react-router-dom';

import NestedLin from './components/NestedLin';
import Another from './components/Another';
import Registeration from './components/Registeration';
import Todolist from './components/todolist';

function App() {
  return (
    <div className="App">
      <div className="jumbotron text-center m-0 p-2">
      <h1>Hello World! la la la</h1>
      <h4>This is Menu. Click the link! </h4>
     </div>
    <Router>
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
      <ul className="navbar-nav">
     
      <li className="nav-item">
        <Link to="/privates" className="nav-link">Dashboard</Link>
      </li>
      <li className="nav-item">
        <Link to="/services" className="nav-link">Services</Link>
      </li>
      <li className="nav-item">
        <Link to="/aboutus" className="nav-link">About Us</Link>
      </li>
      <li className="nav-item">
        <Link to="/todolist" className="nav-link">Todo List</Link>
      </li>
      </ul>
      </nav> 
        <Switch>
        
        <Route path="/login" children={<Loginpage/>}/>
        <PrivateRoute path="/privates"><PrivatePages/></PrivateRoute>
        <Route path="/services" children={<NestedLin/>}/>
        <Route path="/aboutus" children={<Another/>}/>
        <Route path="/todolist" children={<Todolist/>}/>
      </Switch>
   
      <SignoutButton/> 
    </Router>
    
    </div>
   

  );
}
const isAuthontication = {
  isAuthon: false,
  signin(ab){
      isAuthontication.isAuthon = true;
      setTimeout(ab, 100)
  },
  signout(ab){
    isAuthontication.isAuthon = false;
    setTimeout(ab, 100);
  }
};

function PrivateRoute({children, ...rest}){
  return (
  <Route
  {...rest} 
  render ={({location})=>isAuthontication.isAuthon ?(
    children
    ):(
    <Redirect to = {{
      pathname: "/login",
      state: {from: location}
    }}
    />
  )}
  />
  );
  }
  
function Loginpage(){
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" }}
  let login = () =>{
  isAuthontication.signin(()=>{
    history.replace(from);
    });
  }
  let register=()=>{
    return (<Registeration/>);
  }
   
return (
  <div>
    <p>You must log in to view the page {from.pathname}</p>
    
    <button className="btn btn-outline-primary" onClick={login}>Log in</button>
    <button className="btn btn-outline-primary" onClick={register}>Sign up</button>
  </div>
);
}
function SignoutButton(){
  let history = useHistory();
  return isAuthontication.isAuthon ?(
    <p>Welcome! {" "}
    <button onClick={()=>{isAuthontication.signout(()=>history.push("/"));
    }}>Sign out</button>
    </p>
  ):(
    <p>You have to sign in first!</p>
  )
}
export default App;
