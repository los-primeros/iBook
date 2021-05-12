import React, { useState, useEffect } from 'react';
import CountiresCard from './CountiresCard.jsx'

function Turkey(props) {
    return ( 
        <div>  
            {/* {console.log(props)} */}
        <div>
            {
                props.hotels.filter(hotel => hotel.country === 'Turkey').map((filtredHotel, index) => (
                    <CountiresCard hotel={filtredHotel} key={index} />
                ))
            }
        </div>
     </div> 
    )
}

export default Turkey