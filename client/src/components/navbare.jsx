import React from "React" ;
import { Link } from 'react-router-dom'


function  Navbare () {
    return (
        <div > 
            <nav className="nav-links">  
                 <Link to="/signup">SingUp</Link> 
                 <Link to="/login">Login</Link> 
                 <Link to="/coutries">Countries</Link> 
                 <Link to="/favoritelist">favoriteList</Link> 
                
            </nav>
         </div>
    )

}

export default Navbare