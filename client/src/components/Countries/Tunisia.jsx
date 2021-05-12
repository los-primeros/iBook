import React, { useState, useEffect } from 'react';
import CountiresCard from './CountiresCard.jsx'

function Tunisia(props) {
    return ( 
        <div>  
            {/* {console.log(props)} */}
        <div>
            {
                props.hotels.filter(hotel => hotel.country === 'Tunisia').map((filtredHotel, index) => (
                    <CountiresCard hotel={filtredHotel} key={index} />
                ))
            }
        </div>
     </div> 
    )
}

export default Tunisia