import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";


function CountriesDetail(props) {

  return (
    <div>
      <ListGroup>
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
