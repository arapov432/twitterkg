import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import Textpost from './Textpost';
import Another from './Another';
import Sidebar from './Sidebar';
export const NestedLin =()=>{
    
        let {url, path} = useRouteMatch();
        return (
            <div>
                <Router>
                    <div>
                        <ul>
                        <h1>Select one of the topics</h1>
                            <li>
                                <Link to={`${url}/texts`}>Text Post </Link>
                            </li>
                            <li>
                                <Link to={`${url}/another`}>Another Page</Link>
                            </li>
                            <li>
                                <Link to={`${url}/sidebar`}>Side Bar Page</Link>
                            </li>
                        </ul>
                        <Switch>
                           
                            <Route exact path={`${path}/texts`} children={<Textpost/>}/>
                            <Route path={`${path}/another`} children={<Another/>}/>
                            <Route path={`${path}/sidebar`} children={<Sidebar/>}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    
}
//const Textpost=()=>{
  //  return <h1>This is Text Post la <Textpost/></h1>
//}
//const Another=()=>{
  //  return <h1>This is Another la <Another/></h1>
//}
export default NestedLin
