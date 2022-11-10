import React from 'react'
import '../styles/usercard.css'

const UserCard = ({ user, deleteUser, setUserToUpdate }) => {
  return (
    <div className="user-card">
      <h3>{`${user.first_name} ${user.last_name}`}</h3>
      <div className="line"></div>
      <h5>CORREO</h5>
      <p>
        <span>{user.email}</span>
      </p>
      <h5>CUMPLEAÑOS</h5>
      <p>
        <i className="img-birthday fa-solid fa-gift"></i>
        <span>{user.birthday}</span>
      </p>
      <div className="line"></div>
      <div className="footer-card">
        <div className="box-buttons">
          <i
            onClick={() => deleteUser(user.id)}
            className="button-trash fa-regular fa-trash-can"
          ></i>
          <i
            onClick={() => setUserToUpdate(user)}
            className="button-edit fa-solid fa-pencil"
          ></i>
        </div>
      </div>
    </div>
  )
}

export default UserCard
