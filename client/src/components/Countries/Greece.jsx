import React, { useState, useEffect } from 'react';
import CountiresCard from './CountiresCard.jsx'

function Greece(props) {
    return ( 
        <div className="top-left">  
            {/* {console.log(props)} */}
        <div>
            {
                props.hotels.filter(hotel => hotel.country === 'Greece').map((filtredHotel, index) => (
                    <CountiresCard hotel={filtredHotel} key={index} />
                ))
            }
        </div>
     </div> 
    )
}

export default Greece