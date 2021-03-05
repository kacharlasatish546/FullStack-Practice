import React from 'react'
import { NavLink } from 'react-router-dom';
import YoutubeDashboard from './YoutubeDashboad'

class UserDashboard extends React.Component {
    render() {
        if (!localStorage.getItem("token")) {
            this.props.history.push("/logout")
        }
        return (
            <div>
                <h1>This this Userdashboard</h1>
                <NavLink to="/logout">Logout</NavLink>
                <YoutubeDashboard></YoutubeDashboard>
            </div>
        )
    }
}

export default UserDashboard;