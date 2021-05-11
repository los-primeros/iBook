import React from "react";
import ReactDOM from 'react-dom';
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import HotelCard from './components/HotelCard.jsx'
import HotelDetails from './components/HotelDetails.jsx'
import data from '../../data.json'
import SignUp from './components/SignUp.jsx'
import Login from './components/Login.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hotels: data,
            currentView: <HotelCard />,
            inputValue: '',
        }

        this.ToggleView = this.ToggleView.bind(this);
        this.hotelFilterOnChange = this.hotelFilterOnChange.bind(this)
    }

    ToggleView(value) {
        this.setState({ currentView: value })
    }

    hotelFilterOnChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }
    render() {
        return (
            <div className="App">
                <h1>

                    <button onClick={() => { this.ToggleView('Home') }}>Home</button>
                    <button onClick={() => { this.ToggleView('SignUp') }}>SignUp</button>
                    <button onClick={() => { this.ToggleView('About') }}>countries</button>
                    <button onClick={() => { this.ToggleView('Login') }}>Login</button>

                    <label htmlFor="search">Search</label>
                    <input type="text" value={this.state.inputValue} onChange={this.hotelFilterOnChange}></input>
                </h1>
                {/* <div> { (this.state.currentView === 'Home' ) ? (<Home />) : (<Login />) }</div> */}
                <div>
                    <HotelDetails hotels={this.state.hotels} />
                    <Login />
                    <SignUp />
                </div>



            </div>

        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"))


// renderInner() {
//     let { display } = this.state;

//     if (display === 'first') {
//       return <FirstComponent />
//     } else if (display === 'second') {
//       return <SecondComponent />