import React from "react";
// import { Card, CardGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom'



var HotelCard = (props) => {
  return (
    <div>
      <div>
        <div className="hotelcard">
          <div className="card" style={{ width: '70rem' }}>
            <img className="card-img-top" src={props.hotel.image} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{props.hotel.name}</h5>
              <p className="card-text"> {props.hotel.Description.slice(0, 60)}... {"   "}
                <Link to={{
                  pathname: 'FavouriteList',
                  state: {
                    item: props.hotel
                  }
                }}>
                  <mark>see more</mark>  </Link>
              </p>
              <p className="card-text"> {props.hotel.address}.</p>
              <p className="card-text">{props.hotel.price}</p>

              <div className="buttonFavorite" style={{ padding: '20px' }}>
                <Link to={{
                  pathname: 'FavouriteList',
                  state: {
                    item: props.hotel
                  }
                }}>
                  <button type="button" class="btn btn-info">Favorites</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelCard

