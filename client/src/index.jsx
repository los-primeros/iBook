import React from "react";
import ReactDOM from 'react-dom';
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import HotelCard from './components/HotelCard.jsx'
import HotelDetails from './components/HotelDetails.jsx'
import data from '../../data.json'
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hotels: data,
            currentView: 'Home',
            inputValue: '',
        }
        this.ToggleView = this.ToggleView.bind(this);
        this.hotelFilterOnChange = this.hotelFilterOnChange.bind(this)
    }

    ToggleView(value) {
        this.setState({
            currentView: value
        })
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

                    <button onClick={() => { this.ToggleView('Home') }}>Login</button>
                    <button onClick={() => { this.ToggleView('About') }}>countries</button>

                    <label htmlFor="search">Search</label>
                    <input type="text" value={this.state.inputValue} onChange={this.hotelFilterOnChange}></input>
                </h1>
                <div>
                    {/* {
                         (this.state.currentView === 'Home') ? (<Home />) : (<About />)
                    } */}
                  <HotelDetails hotels={this.state.hotels}/>
                  {console.log(this.state.hotels)}
                </div>
                
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"))