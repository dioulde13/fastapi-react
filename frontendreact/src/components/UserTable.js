import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../redux/actions/userActions'
import { Link } from 'react-router-dom'
import './UserTable.css'


const UserTable = ({ users }) => {
  const dispatch = useDispatch()

  const [showModal, setShowModal] = useState(false)
  const [userToDelete, setUserToDelete] = useState(null)

  const handleDeleteClick = (user) => {
    setUserToDelete(user)
    setShowModal(true)
  }

  const confirmDelete = () => {
    dispatch(deleteUser(userToDelete.id))
    setShowModal(false)
    setUserToDelete(null)
  }

  const cancelDelete = () => {
    setShowModal(false)
    setUserToDelete(null)
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.nom}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/edit/${user.id}`}>Modifier</Link>
                <button onClick={() => handleDeleteClick(user)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal de confirmation */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Êtes-vous sûr de vouloir supprimer {userToDelete?.nom} ?</p>
            <button onClick={confirmDelete}>Oui</button>
            <button onClick={cancelDelete}>Non</button>
          </div>
        </div>
      )}
    </>
  )
}

export default UserTable
