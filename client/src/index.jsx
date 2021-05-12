import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import Navbare from "./components/navbare.jsx"
// import Home from './components/Home.jsx'
// import About from './components/About.jsx'
// import HotelCard from './components/HotelCard.jsx'
import HotelDetails from './components/HotelDetails.jsx'
import data from '../../data.json'
import SignUp from './components/SignUp.jsx'
import Login from './components/Login.jsx'
import Countries from './components/Countries.jsx'
import Greece from './components/Countries/Greece.jsx'
import Spain from './components/Countries/Spain.jsx'
import Morocco from './components/Countries/Morocco.jsx'
import Turkey from './components/Countries/Turkey.jsx'
import Tunisia from './components/Countries/Tunisia.jsx'
import CountiresCard from './components/Countries/CountiresCard.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        setHotels(data)
    })

    return (
        <Router>
            <Navbare />
            {/* <Countries />  */}
            <Switch>
                <Route exact path="/" component={() => (<HotelDetails hotels={hotels} />)} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/countries' component={Countries} />
                <Route exact path='/countries/greece' component={() => (<Greece hotels={hotels} />)} />
                <Route exact path='/countries/morocco' component={() => (<Morocco hotels={hotels} />)} />
                <Route exact path='/countries/tunisia' component={() => (<Tunisia hotels={hotels} />)} />
                <Route exact path='/countries/turkey' component={() => (<Turkey hotels={hotels} />)} />
                <Route exact path='/countries/spain' component={() => (<Spain hotels={hotels} />)} />
                <Route exact path='/countries/greece/hotels' component={() => (<CountiresCard hotels={hotels} />)} />

            </Switch>
        </Router>

    )

}

ReactDOM.render(<App />, document.getElementById("app"))










// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             hotels: data,
//             currentView: <HotelCard />,
//             inputValue: '',
//         }

//         this.ToggleView = this.ToggleView.bind(this);
//         this.hotelFilterOnChange = this.hotelFilterOnChange.bind(this)
//     }

//     ToggleView(value) {
//         this.setState({ currentView: value })
//     }

//     hotelFilterOnChange = (event) => {
//         this.setState({
//             inputValue: event.target.value
//         })
//     }
//     render() {
//         return (
//             <div className="App">
//                 <h1>

//                     <button onClick={() => { this.ToggleView('Home') }}>Home</button>
//                     <button onClick={() => { this.ToggleView('SignUp') }}>SignUp</button>
//                     <button onClick={() => { this.ToggleView('About') }}>countries</button>
//                     <button onClick={() => { this.ToggleView('Login') }}>Login</button>

//                     <label htmlFor="search">Search</label>
//                     <input type="text" value={this.state.inputValue} onChange={this.hotelFilterOnChange}></input>
//                 </h1>
//                 {/* <div> { (this.state.currentView === 'Home' ) ? (<Home />) : (<Login />) }</div> */}
//                 <div>
//                     <HotelDetails hotels={this.state.hotels} />
//                     <Login />
//                     <SignUp />
//                 </div>

//             </div>

//         )
//     }
// }


// // renderInner() {
// //     let { display } = this.state;

// //     if (display === 'first') {
// //       return <FirstComponent />
// //     } else if (display === 'second') {
// //       return <SecondComponent />
