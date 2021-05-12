import React, { useState, useEffect } from 'react';
import CountiresCard from './CountiresCard.jsx'

function Spain(props) {
    return ( 
        <div>  
            {/* {console.log(props)} */}
        <div>
            {
                props.hotels.filter(hotel => hotel.country === 'Spain').map((filtredHotel, index) => (
                    <CountiresCard hotel={filtredHotel} key={index} />
                ))
            }
        </div>
     </div> 
    )
}

export default Spain