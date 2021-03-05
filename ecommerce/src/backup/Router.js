import React from 'react'
import { HashRouter, NavLink, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login'
import Register from './Register';
import './Router.css'
import YoutubeDashboard from './YoutubeDashboad';


class Router extends React.Component {

    render() {
        return (
            <div>
                <HashRouter>
                    <div className="greyBG">
                        <nav>
                            <NavLink className="spaces textdecorationnone" to="/login">Login</NavLink>
                            <NavLink className="spaces textdecorationnone" to="/register">Register</NavLink>
                            <NavLink className="spaces textdecorationnone" onClick={this.logout} to="/login">Logout</NavLink>
                             <NavLink className="spaces textdecorationnone" to="/youtubedashboard">Youtube</NavLink>
                        </nav>
                    </div>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                    <Route path="/dashboard" component={Dashboard}></Route>
                    <Route path="/youtubedashboard" component={YoutubeDashboard}></Route>
                </HashRouter>
            </div>
        )
    }
}

export default Router;