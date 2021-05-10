import React from "react" ; 
import ReactDOM from 'react-dom'; 
import Home from './components/Home.jsx'
import About from './components/About.jsx'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hotels: [],
            currentView: 'Home',
            inputValue: '',

        }
        this.ToggleView= this.ToggleView.bind(this);
        this.hotelFilterOnChange = this.hotelFilterOnChange.bind(this)
    }

     ToggleView(value){
         this.setState({
             currentView: value
         })
     }

     hotelFilterOnChange= (event) => {
        this.setState({
            inputValue: event.target.value
        })
     }


    render() {
        return (
            <div className="App"> 
            <h1>

            <button onClick={() => {this.ToggleView('Home')}}>Login</button>
            <button onClick={() => {this.ToggleView('About')}}>countries</button>

            <label htmlFor="search">Search</label>
            <input type="text" value={this.state.inputValue} onChange={this.hotelFilterOnChange}></input>
            </h1>
              <div>
                  {
                      (this.state.currentView === 'Home') ? (<Home/>) : (<About/>)  
                  }
              </div>
             </div>
        )
    }
}

ReactDOM.render(<App/> , document.getElementById("app"))