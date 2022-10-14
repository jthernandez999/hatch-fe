import React from 'react'

const Card = (props) => {
  return (
    <li>
      <div
        className="card-container"
        style={{
          width: '50%',
          border: 'solid 3px #d3d3d3',
          margin: '10px auto',
        }}
      >
        <p>
          <strong>{props.character.name}</strong>
        </p>
        <p>{props.character.alterEgo}</p>
        <p>{props.character.alignment}</p>
      </div>
    </li>
  )
}

export default Card
