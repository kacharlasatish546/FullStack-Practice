import React from 'react'
import axios from 'axios'
import './Register.css'

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            emailId: '',
            password: ''
        }
    }

    captureState = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({ [name]: value })
    }

    register = (event) => {
        event.preventDefault();
        axios.post("http://localhost:9017/user/register", this.state).then(
            response => {
                if (response.data.token) {
                    localStorage.setItem('token', response.data.token)
                    sessionStorage.setItem('token', response.data.token)
                }
                this.props.history.push("/dashboard")
            },
            error => {
                console.log(error)
            }
        )
    }

    render() {
        return (
            <div className="center">
                <h1>Register</h1>
                <input onChange={this.captureState} name="username" placeholder="Username"></input><br></br>
                <input onChange={this.captureState} name="emailId" placeholder="Email" ></input><br></br>
                <input onChange={this.captureState} name="password" placeholder="Password"></input><br></br>
                <button onClick={this.register}>Register</button>
            </div>
        )
    }
}

export default Register;