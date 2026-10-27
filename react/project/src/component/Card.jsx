import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div style={{ border: '2px solid red', height: '300px', width: '400px' }}>
        <h1>MY CAR</h1>
        <p>
        <img src={props.img}></img>
        </p>
        <h2>CAR NAME:{props.name}</h2>
        <h2>PRICE: {props.price}</h2>
      </div>
    </div>
  )
}

export default Card
