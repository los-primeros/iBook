import React from "React";
import { Button, Form } from 'react-bootstrap';
// import axios from "axios"; 


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};

    }

    submitLogin(event) {

    }
    // $axios.post('/api/login', {
    //     email: '',
    //     password : ''
    //   });

    render() {
        return (
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
        )
    }
}

export default Login;

// <div className="inner-container">
            //     <div className="header">
            //         Login
            // </div>
            //     <div className="box">

            //         <div className="input-group">
            //             <label htmlFor="email">Email</label>
            //             <input type="text" name="email" className="login-input" placeholder="Email" />
            //         </div>

            //         <div className="input-group">
            //             <label htmlFor="password">Password</label>
            //             <input
            //                 type="password"
            //                 name="password"
            //                 className="login-input"
            //                 placeholder="Password" />
            //         </div>

            //         <button
            //             type="button"
            //             className="login-btn"
            //             onClick={this
            //                 .submitLogin
            //                 .bind(this)}>Login</button>
            //     </div>
            // </div>


