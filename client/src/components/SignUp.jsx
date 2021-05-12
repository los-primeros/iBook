import React from "React"
import axios from "axios"; 

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    submitSignUp(event) {

    } 

    // $axios.post('/signup', {
    //     firstName: '',
    //     lastName: '',
    //     age : '',
    //     email: '',
    //     password : '',
    //   });
   

    render() {
        return (

            <div className="inner-Container">
                <div className="header">
                    SignUp
            </div>
                <div className="box">
                    <div className="input-group">
                        <label htmlFor="username">Firstname</label>
                        <input
                            type="text"
                            name="firstname"
                            className="login-input"
                            placeholder="Firstname" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="username">Lastname</label>
                        <input
                            type="text"
                            name="lastname"
                            className="login-input"
                            placeholder="Lastname" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="username">Age</label>
                        <input
                            type="text"
                            name="Age"
                            className="login-input"
                            placeholder="Age" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" className="login-input" placeholder="Email" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="login-input"
                            placeholder="Password" />
                    </div>
                    <button
                        type="button"
                        className="log"
                        onClick={this
                            .submitSignUp
                            .bind(this)}>Submit</button>
                </div>
            </div>
        );
    }
}

export default SignUp;
