import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../redux/actions/userActions'
import { Link } from 'react-router-dom'
import UserTable from '../../components/UserTable'

const UserList = () => {
  const dispatch = useDispatch()
  const { users } = useSelector(state => state.user)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div>
      <Link to="/add">Ajouter un utilisateur</Link>
      <UserTable users={users} />
    </div>
  )
}

export default UserList
