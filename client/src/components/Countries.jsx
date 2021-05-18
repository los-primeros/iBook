import React from "react";
import { Link } from 'react-router-dom'
import CountriesDetail from "./CountriesDetail.jsx";
import { useHistory, useParams } from 'react-router-dom'


function Countries(props) {
        const { id } = useParams()
        console.log(id)
        return (
                <div>
                        <div className="leftlist">
                                {props.hotels.filter(hotel => hotel.country === id).map((filtredHotel, index) => (
                                        <CountriesDetail hotel={filtredHotel} key={index} />
                                ))
                                }
                        </div>
                </div>

        )

}

export default Countries