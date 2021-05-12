import React  from "React";
import { Link } from 'react-router-dom'


function CountiresCard(props) {
  
  return (
  
    <div>
     <nav className="nav-bar">
     <Link to='/countries/greece/hotels'>{props.hotel.name}</Link>
     </nav>
  </div>
)
  }
export default CountiresCard 