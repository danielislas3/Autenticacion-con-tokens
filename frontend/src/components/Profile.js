import React from 'react'
import AuthService from '../services/auth';

export default function Profile(props) {
  const authService = new AuthService()

  const handleLogout = () => {
    authService
      .logout()
      .then(() => {
        localStorage.removeItem('loggedUser')
        props.history.push('/login')
      })
      .catch(err => console.log(err))
  }


  return (
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}
