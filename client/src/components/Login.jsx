import React from "react";
import { Button, Form } from 'react-bootstrap';
import axios from "axios";


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            data: []
        }
        console.log("***************************", this.state)
        this.handleInputt = this.handleInputt.bind(this)
        this.onSubmitt = this.onSubmitt.bind(this)
        this.check = this.check.bind(this)
    }
    onSubmitt(event) {
        event.preventDefault();
        const { email, password } = this.state
        if (this.check()) {
            axios.post('/api/login', { email, password })
                .then((res) => { console.log(res.data) })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
    handleInputt(e) {
        this.setState({
            [e.target.name]: e.target.value

        })
        console.log("this is my input", this.state)

    }
    check() {
        if (this.state.password.length < 3) {
            alert('Your password is too short')
            return true
        }
        return false
    }
    render() {
        return (
            <div className="container_login">
                <div className="row">
                    <div className="col-md-offset-5 col-md-4 text-center">
                        <h1 className="text-white">Unique Login Form</h1>
                        <div className="form-loginn"><br />
                            <h4>Secure Login</h4>
                            <br />
                            <input type="email" id="userName" className="form-control input-sm chat-input" placeholder="email" onChange={this.handleInputt} />
                            <br /><br />
                            <input type="password" id="userPassword" className="form-control input-sm chat-input" placeholder="password" onChange={this.handleInputt} />
                            <br /><br />
                            <div className="wrapper">
                                <span className="group-btn">
                                    <a href="#" className="btn btn-danger btn-md">login <i className="fa fa-sign-in" /></a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;



