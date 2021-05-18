import React from "react"
import axios from "axios";

class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      password2: "",
      data: []
    }
    this.handleInput = this.handleInput.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.check = this.check.bind(this)
  }
  onSubmit(event) {
    event.preventDefault();
    const { firstname, lastname, email, password } = this.state
    if (this.check()) {
      axios.post('/api/signup', { firstname, lastname, email, password })
        .then((res) => { console.log(res.data) })
        .catch((error) => {
          console.log(error)
        })
    }
  }
  changeView() {
    
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log('first name : ', this.state)
  }
  check() {
    if (this.state.firstname.length < 5) {
      alert('please check your first name')
      return false
    }
    return true
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="box">
          <h2 className="text-center" id="title">Welcome in TripOn</h2>

          <hr />
          <div className="row">
            <div className="col-md-5">
              <form role="form" >
                <fieldset>
                  <p className="text-uppercase pull-center"> SIGN UP</p>
                  <div className="form-group">
                    <input type="text" name="firstname" id="name" className="form-control input-lg" placeholder="Firstname" onChange={this.handleInput} />
                  </div>
                  <div className="form-group">
                    <input type="text" name="lastname" id="username" className="form-control input-lg" placeholder="Lastname" onChange={this.handleInput} />
                  </div>
                  <div className="form-group">
                    <input type="email" name="email" id="email" className="form-control input-lg" placeholder="Email Address" onChange={this.handleInput} />
                  </div>
                  <div className="form-group">
                    <input type="password" name="password" id="password" className="form-control input-lg" placeholder="Password" onChange={this.handleInput} />
                  </div>
                  <div className="form-group">
                    <input type="password" name="password2" id="password2" className="form-control input-lg" placeholder="Password2" onChange={this.handleInput} />
                  </div>

                  <div>
                    <button className="btn btn-lg btn-primary " type="submit" onClick={this.onSubmit}>Submit</button>


                  </div>
                </fieldset>
              </form>
              <div className="img-center">
          <img src="https://image.freepik.com/photos-gratuite/piscine-hotel-ciel-tropical-coucher-soleil_1203-4853.jpg" />
        </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default SignUp;
/*

<div className="container-fluid">
<div className="container_SIGN">
  <h2 className="text-center" id="title"> Welcome in TripOn </h2>

  <hr />
  <div className="row">
    <div className="col-md-5">
      <form role="form">
        <fieldset>
          <p className="text-uppercase pull-center"> SIGN UP </p>
          <div className="form-group">
            <input type="text" name="firstname" id="username" className="form-control input-lg" placeholder="firstname" onChange={this.handleInput}/>
          </div>
          <div className="form-group">
            <input type="email" name="email" id="email" className="form-control input-lg" placeholder="Email Address" onChange={this.handleInput}/>
          </div>
          <div className="form-group">
            <input type="password" name="password" id="password" className="form-control input-lg" placeholder="Password"onChange={this.handleInput} />
          </div>
          <div className="form-group">
            <input type="password" name="password2" id="password2" className="form-control input-lg" placeholder="Password2" onChange={this.handleInput}/>
          </div>
          <div>
            <input type="submit" className="btn btn-lg btn-primary   value=" register" />
          </div>

        </fieldset>
      </form>
    </div>

    <div className="col-md-2">

    </div>
    <div className="col-md-5">

    </div>
  </div>
</div>
</div>

/* */