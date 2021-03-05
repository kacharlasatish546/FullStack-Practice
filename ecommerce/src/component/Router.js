import React from 'react'
import { HashRouter, NavLink, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import Login from './Login'
import Logout from './Logout';
import Products from './Products';
import Register from './Register';
import './Router.css'
import UserDashboard from './UserDashboard';
import YoutubeDashboard from './YoutubeDashboad';
import YoutubeListItems from './YoutubeListItems';


class Router extends React.Component {

    render() {
        return (
            <div>
                <HashRouter>
                    <div className="greyBG">
                        <nav>
                            <NavLink className="spaces textdecorationnone" to="/login">Login</NavLink>
                            <NavLink className="spaces textdecorationnone" to="/register">Register</NavLink>
                            <NavLink className="spaces textdecorationnone" to="/products">Products</NavLink>
                             
                        </nav>
                    </div>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                    <Route path="/products" component={Products}></Route>
                    <Route path="/dashboard" component={Dashboard}></Route>
                    <Route path="/userdashboard" component={UserDashboard}></Route>
                    <Route path="/youtubedashboard" component={YoutubeDashboard}></Route>
                    <Route path="/logout" component={Logout}></Route>
                    <Route path="/youtubeListItems" component={YoutubeListItems}></Route>
                </HashRouter>
            </div>
        )
    }
}

export default Router;