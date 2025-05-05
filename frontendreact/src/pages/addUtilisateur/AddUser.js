import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../../redux/actions/userActions'
import { useNavigate } from 'react-router-dom'
import './AddUser.css'


const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [user, setUser] = useState({ nom: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(user));
    navigate('/');
  };

  return (
    <div className="form-container">
      <h1>Ajouter un Utilisateur</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nom">Nom</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={user.nom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn-submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddUser;