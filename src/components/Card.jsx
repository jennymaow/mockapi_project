import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'
const Card = ({user}) => {
  return (
    <div className="card">
            <h1>{user.emoji}</h1>
            <div className="info">
              <h2>{user.name}</h2>
              <h3>Gender: {user.sex}</h3>
              <h3>Birthdate: {user.birthdate.slice(0, 10)}</h3>
            </div>
            <Link className="more" to={`/users/${user.id}`}>See more</Link>
          </div>
  )
}

export default Card