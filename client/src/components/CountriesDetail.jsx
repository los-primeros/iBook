import React from "react";
import { ListGroup, ListGroupItem } from 'react-bootstrap';

function CountriesDetail(props) {

    return (

        <ListGroup>
            <ListGroup.Item>{props.hotel.name}</ListGroup.Item>
        </ListGroup>
    )
}

export default CountriesDetail