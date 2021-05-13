import React from "React" ;
import { Link } from 'react-router-dom'


function  Navbare () {
    return (
        <div classname="navbar" > 
            <nav className="nav-links">  
                 <Link to="/signup" className="nav">SingUp</Link> 
                 <Link to="/login" className="nav">Login</Link> 
                 <Link to="/coutries" className="nav">Countries</Link> 
                 <Link to="/favoritelist" className="nav">favoriteList</Link> 
                
            </nav>
         </div>
    )

}

export default Navbare