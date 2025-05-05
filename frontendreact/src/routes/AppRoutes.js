import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserList from '../pages/listUtilisateur/UserList'
import AddUser from '../pages/addUtilisateur/AddUser'
import EditUser from '../pages/editUtilisateur/EditUser'

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/add" element={<AddUser />} />
      <Route path="/edit/:id" element={<EditUser />} />
    </Routes>
  </BrowserRouter>
)

export default AppRoutes
