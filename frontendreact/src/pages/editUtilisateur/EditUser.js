import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { editUser, fetchUsers } from '../../redux/actions/userActions'
import './EditUser.css'


const EditUser = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { users } = useSelector(state => state.user)
  const user = users.find(u => u.id === parseInt(id))

  const [form, setForm] = useState({ nom: '', email: '' })

  useEffect(() => {
    if (!users.length) dispatch(fetchUsers())
    else if (user) setForm({ nom: user.nom, email: user.email })
  }, [dispatch, users, user])

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(editUser(id, form))
    navigate('/')
  }

  return (
    <div className="edit-user-container">
    <form onSubmit={handleSubmit} className="edit-user-form">
      <h2>Modifier l'utilisateur</h2>
      <label>Nom</label>
      <input
        type="text"
        value={form.nom}
        onChange={e => setForm({ ...form, nom: e.target.value })}
        placeholder="Entrez le nom"
        required
      />
      <label>Email</label>
      <input
        type="email"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
        placeholder="Entrez l'email"
        required
      />
      <button type="submit">Modifier</button>
    </form>
  </div>
  
  )
}

export default EditUser
