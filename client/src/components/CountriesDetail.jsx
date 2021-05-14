import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import HotelCard from "./HotelCard.jsx";

function CountriesDetail(props) {

  return (
    <div>
      <ListGroup>
        {/* <ListGroup.Item> <Link to={"/hotels/" +props.hotel._id}>{props.hotel.name}</Link> </ListGroup.Item> */}
        <ListGroup.Item>
        
          <div onClick={() => props.handleClick(props.hotel)}>
            {props.hotel.name}
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default CountriesDetail;
