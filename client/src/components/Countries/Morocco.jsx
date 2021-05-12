import React, { useState, useEffect } from 'react';
import CountiresCard from './CountiresCard.jsx'

function Morocco(props) {
    return ( 
        <div>  
            {/* {console.log(props)} */}
        <div>
            {
                props.hotels.filter(hotel => hotel.country === 'Morocco').map((filtredHotel, index) => (
                    <CountiresCard hotel={filtredHotel} key={index} />
                ))
            }
        </div>
     </div> 
    )
}

export default Morocco