import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({user}) => {
  return (
    <div className="card">
            <h1>{user.emoji}</h1>
            <div className="info">
              <h2>{user.name}</h2>
              <h3>{user.sex}</h3>
              <h3>{user.birthdate.slice(0, 10)}</h3>
              <h3>{user.id}</h3>
            </div>
            <Link to={`/${user.id}`}>Ver más</Link>
          </div>
  )
}

export default Card