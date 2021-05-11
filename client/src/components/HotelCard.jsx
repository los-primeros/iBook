import React from "React" ; 

var HotelCard=(props)=>(
  
    <div>
     <div className="card">
      <img src={props.hotel.image} />
      <div className="card-container">
        <h4>
          <b>{props.hotel.name}</b>
          <br />
          <span>{props.hotel.address}</span>
        </h4>
        <p>{props.hotel.Description}</p>
      </div>
    </div>
  </div>
)

export default HotelCard 