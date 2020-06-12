import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Another from './Another'
import NestedLin from './NestedLin'
import Nomatch404 from './Nomatch404'

const routes=[
    {
        path: "/",
        exact: true,
        sidebar: ()=><div><h1>Home Page is here on sidebar</h1></div>,
        main: ()=><div><Another/></div>
    },
    {
        path:"/nestedLink",
        sidebar: ()=><div><NestedLin/></div>,
        main: ()=><div><NestedLin/></div>
    },
    {
        path: "/nomatch",
        sidebar: ()=> <div><Nomatch404/></div>,
        main: ()=> <div><Nomatch404/></div>
    }
];
export default function Sidebar() {
    return (
        <div>
            <Router>
                <div>
                    <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to="/nestedLink">Nested Link</Link>
                    </li>
                    <li>
                        <Link to="/nomatch">No Match</Link>
                    </li>
                    </ul>

            <Switch>
                {routes.map((route, index)=>(
                <Route 
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar/>}    
            />
              ))}
            </Switch>
                </div>
                <div>
                    <Switch>
                        {routes.map((route, index)=>(
                            <Route 
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            children={<route.main/>}
                            />
                        ))}
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
