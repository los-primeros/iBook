import React , { useState } from "react" ; 
import { Link } from 'react-router-dom' 
import CountriesDetail from "./CountriesDetail.jsx" ;
import { useHistory, useParams } from 'react-router-dom'
import HotelCard from "./HotelCard.jsx" ;

function Countries (props ) {
     const {id} = useParams()
     const {idname} = useParams() 
//      console.log(idname)
const [currentHotel, setCurrentHotel] = useState(null);

     return (
             <div>
                  <div className="leftlist">
                        { props.hotels.filter(hotel => hotel.country === id ).map((filtredHotel,index) => (
                                        <CountriesDetail handleClick={setCurrentHotel} hotel={filtredHotel} key={index}  />
                                ))    
                        }
                 </div>   
                 <div>
                 <div>{currentHotel ? <HotelCard hotel={currentHotel} /> : null}</div>
               
                 </div>  
             </div>
           
        )

}

export default Countries