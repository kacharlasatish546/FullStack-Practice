import axios from 'axios';
import React from 'react'
import './Login.css'

class Login extends React.Component {

    constructor() {
        console.log("Constructor")
        super();
        this.state = {
            emailId: '',
            password: '',
            role: 'ROLE_CUSTOMER'
        }
    }

    componentDidMount = () => {
        console.log("Component Did Mount")
    }

    componentWillUnmount = () => {
        console.log("Component Will Unmount")
    }

    captureState = (event) => {
        console.log("Component Did update")
        var name = event.target.name;
        var value = event.target.value;
        this.setState({ [name]: value })
    }

    login = (event) => {
        event.preventDefault();
        axios.post("http://localhost:9017/user/login", this.state).then(
            response => {
                console.log("inside Response")
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
        console.log("Render")
        return (
            <div>
                <div className="center">
                    <h1>Login</h1>
                    <input onChange={this.captureState} name="emailId" placeholder="Email" ></input><br></br>
                    <input onChange={this.captureState} name="password" placeholder="Password"></input><br></br>
                    <button onClick={this.login}>Login</button>
                </div>
            </div>
        )
    }
}
export default Login;