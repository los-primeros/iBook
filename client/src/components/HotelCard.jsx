import React from "React" ; 
import { Card, CardGroup , ListGroup , ListGroupItem } from 'react-bootstrap';



var HotelCard=(props)=>(
  
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

export default HotelCard 

{/* {console.log(props.hotel.image)} */}
     {/* <div className="card">
      <img src={props.hotel.image} />
      <div className="card-container">
        <h4>
          <b>{props.hotel.name}</b>
          <br />
          <span>{props.hotel.address}</span>
        </h4>
        <p>{props.hotel.Description}</p>
        <p>{props.hotel.price}</p>
      </div>
    </div> */}
