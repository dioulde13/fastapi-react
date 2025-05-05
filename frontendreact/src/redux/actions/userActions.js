import axios from 'axios'

export const fetchUsers = () => async dispatch => {
  const res = await axios.get('http://localhost:8000/users')
  dispatch({ type: 'SET_USERS', payload: res.data })
}

export const addUser = (user) => async dispatch => {
  await axios.post('http://localhost:8000/users', user)
  dispatch(fetchUsers())
}

export const editUser = (id, user) => async dispatch => {
  await axios.put(`http://localhost:8000/users/${id}`, user)
  dispatch(fetchUsers())
}

export const deleteUser = (id) => async dispatch => {
  await axios.delete(`http://localhost:8000/users/${id}`)
  dispatch(fetchUsers())
}
