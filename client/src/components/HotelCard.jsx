import React from "react" ; 
import { Card, CardGroup , ListGroup , ListGroupItem } from 'react-bootstrap';



var HotelCard=(props)=>{


  return (
    <div>
      <CardGroup>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.hotel.image} />
        <Card.Body>
          <Card.Title>{props.hotel.name}</Card.Title>
          <Card.Text>
          {props.hotel.Description}
           </Card.Text>
          </Card.Body>
         <ListGroup className="list-group-flush">
          <ListGroupItem>{props.hotel.address}</ListGroupItem>
          <ListGroupItem>{props.hotel.price}</ListGroupItem>
        </ListGroup>
        </Card>
        </CardGroup>
   </div>
)

}
export default HotelCard 
