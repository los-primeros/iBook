import React from "React" ; 
import { Link } from 'react-router-dom'
import data from '../../../data.json'



function Countries () {
     return (
             <div> 
             <nav className="nav-bar">
                  <Link to='/countries/greece'>Greece</Link>
                  <Link to='/countries/morocco'>Morocco</Link>
                  <Link to='/countries/tunisia'>Tunisia</Link>
                  <Link to='/countries/turkey'>Turkey</Link>
                  <Link to='/countries/spain'>Spain</Link>
              </nav>
            </div>
        )
    
}

export default Countries