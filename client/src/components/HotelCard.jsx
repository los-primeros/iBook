import React from "React";

var HotelCard = (props) => (

  
    <div>
      <div className="card">
        <img src={props.hotel.image} />

            <h1 className="name">{props.hotel.name}</h1>
            <br />
            <h4 className="adress">{props.hotel.address}</h4>
            <p className="text" >{props.hotel.Description}</p>
        
      </div>
    </div>
 
)

export default HotelCard




{/*try1
   <div className="grid">
      <div className="grid-item">
        <img className="card-img" src={props.hotel.image} />
        <div className="card-content">
          <h4 className="card-header">
            <b>{props.hotel.name}</b>
            <br />
            <span className="card-ad">{props.hotel.address}</span>
          </h4>
          <p className="card-text">{props.hotel.Description}</p>
        </div>
      </div>
    </div> */}



{/* <div>
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
</div> */}