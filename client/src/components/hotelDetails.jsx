import React from "React" ; 
import HotelCard from "./HotelCard.jsx";

var HotelDetails = (props) => {
   return ( <div>
    {props.hotels.filter(hotel => hotel.rate === 5).map((filtredHotel,index) => (
         <HotelCard   hotel={filtredHotel} key={index}  />
    ))}
  </div>
)}

export default HotelDetails;