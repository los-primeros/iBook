// import React from "React";

// class SignUp extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {}

//     }
//     submitSignUp(event) {

//     }

//     render() {

//         return (

//             <div className="inner-Container">
//                 <div className="header">
//                     SignUp
//             </div>
//                 <div className="box">
//                     <div className="input-group">
//                         <label htmlFor="username">Firstname</label>
//                         <input
//                             type="text"
//                             name="firstname"
//                             className="login-input"
//                             placeholder="Firstname" />
//                     </div>
//                     <div className="input-group">
//                         <label htmlFor="username">Lastname</label>
//                         <input
//                             type="text"
//                             name="lastname"
//                             className="login-input"
//                             placeholder="Lastname" />
//                     </div>
//                     <div className="input-group">
//                         <label htmlFor="username">Age</label>
//                         <input
//                             type="text"
//                             name="Age"
//                             className="login-input"
//                             placeholder="Age" />
//                     </div>

//                     <div className="input-group">
//                         <label htmlFor="email">Email</label>
//                         <input type="text" name="email" className="login-input" placeholder="Email" />
//                     </div>

//                     <div className="input-group">
//                         <label htmlFor="password">Password</label>
//                         <input
//                             type="password"
//                             name="password"
//                             className="login-input"
//                             placeholder="Password" />
//                     </div>
//                     <button
//                         type="button"
//                         className="log"
//                         onClick={this
//                             .submitSignUp
//                             .bind(this)}>Submit</button>
//                 </div>
//             </div>
//         );
//     }
// }

// export default SignUp;

import React, { useState } from 'react';
import useSignUpForm from './useSignUpForm.jsx'



// submitSignUp(event) {

// }



function SignUp() {
    const {inputs, handleInputChange, handleSubmit} = useSignUpForm();
    return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>FirstName</label>
            <input type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName} required />
            <label>LastName</label>
            <input type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName} required />
          </div>
          <div>
            <label onChange={handleInputChange} value={inputs.age}>Age</label>
            <input type="age" name="age" required />
          </div>
          <div>
            <label onChange={handleInputChange} value={inputs.email}>Email</label>
            <input type="email" name="email"/>
          </div>
          <div>
            <label onChange={handleInputChange} value={inputs.password}>Password</label>
            <input type="password" name="password"/>
          </div>
         
          <button type="submit">Sign Up</button>
        </form>
      )
}

export default SignUp