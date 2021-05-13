import React from "React";

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};

    }

    submitLogin(event) {

    }

    render() {
        return (
            <div className="inner-Container" id="login">
                <div className="header"> Login </div>
                <div className="box">
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="Username"
                            className="login-input"
                            placeholder="Username" />
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
                        className="btn"
                        onClick={this
                            .submitLogin
                            .bind(this)}>Login</button>
                </div>
            </div>
        )
    }
}

export default Login;


