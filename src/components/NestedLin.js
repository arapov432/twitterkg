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
                        <ul className="btn btn-group-vertical">
                        <h1>Select one of the topics</h1>
                            <li className="btn btn-outline-primary">
                                <Link to={`${url}/texts`}>Text Post </Link>
                            </li>
                            <li className="btn btn-outline-primary">
                                <Link to={`${url}/another`}>Another Page</Link>
                            </li>
                            <li className="btn btn-outline-primary">
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

export default NestedLin
