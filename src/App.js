import React from 'react';
import Public from './components/Public';
import PrivatePages from './components/Privatepages';
import {BrowserRouter as Router, Route, Link, Switch, useHistory, Redirect, useLocation} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="jumbotron text-center">
    <h1>Hello World! la la la</h1>
</div>
<div className="container">
    <Router>
    <SignoutButton/>
      <h1>This is Menu. Click the link! </h1>
      <ul className="text-center col-sm-12">
      <li className="btn btn-outline-primary">
        <Link to="/public">Public Page</Link>
      </li>
      <li className="btn btn-outline-primary">
        <Link to="/privates">Private Page</Link>
      </li>
      </ul>
      <Switch>
        <Route path="/public"><Public/></Route>
        <Route path="/login"><Loginpage/></Route>
        <PrivateRoute path="/privates"><PrivatePages/></PrivateRoute>
      </Switch>
    </Router>
    </div>
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
 

return (
  <div>
    <p>You must log in to view the page {from.pathname}</p>
    
    <button onClick={login}>Log in</button>
    
  </div>
);
}

export default App;
