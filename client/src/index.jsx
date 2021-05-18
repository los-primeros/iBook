import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import Navbare from "./components/navbare.jsx"

import HotelDetails from './components/HotelDetails.jsx'
import FavouriteList from './components/FavouriteList.jsx'
import data from '../../data.json'
import SignUp from './components/SignUp.jsx'
import Login from './components/Login.jsx'
import Countries from './components/Countries.jsx'
// import HotelCard from './components/HotelCard.jsx'
import { BrowserRouter as Router, Switch, Route , useRouteMatch } from 'react-router-dom'





function App() {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        setHotels(data)
    })


    const countries = new Set(hotels.map((hotel) => hotel.country))
    console.log(countries)


    return (
        <div className="background">
            <Router>
                <Navbare country={countries} />

                {/* <Countries />  */}
                <Switch>
                    <Route exact path="/" component={() => (<HotelDetails hotels={hotels} />)} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={SignUp} />
                    <Route exact path='/FavouriteList' component={FavouriteList} />
                    <Route exact path='/countries/:id' component={() => (<Countries hotels={hotels} />)} />
                </Switch>
            </Router>
        </div>

    )

}

ReactDOM.render(<App />, document.getElementById("app"))

