import React from "React" ; 
import CountiresCard from "./CountiresCard.jsx";

var CountiresDetailes = (props) => (
    <div>
    {props.hotels.map((filtredHotel,index) => (
         <CountiresCard   hotel={filtredHotel} key={index}  />
    ))}
  </div>
);

export default CountiresDetailes;