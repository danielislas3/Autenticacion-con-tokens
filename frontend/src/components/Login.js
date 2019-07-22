import React, {useEffect} from 'react'
import AuthService from '../services/auth'
import useForm from '../hooks/useForm'

function Login(props) {
  const [form, handleInput] = useForm()
  const authService = new AuthService()

  useEffect(()=>{

    const loggedUser = localStorage.getItem('loggedUser')
    if(loggedUser) return props.history.push('/profile')
  },[props.history])

  const handleLogin = () => {
    console.log(form)
    authService
      .login(form)
      .then(response => {
        // aqui debería de ir una notificación o un SWAL o un TOASTR
        console.log(response)
        localStorage.setItem('loggedUser', JSON.stringify(response.data.user))
      })
      .catch(err => {
        // aqui debería de ir una notificación o un SWAL o un TOASTR
        console.log(err.response)
        alert(err.response.data.msg || err.response.data.err.message)
      })
  }
  return (
    <div>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" onChange={handleInput} />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" onChange={handleInput} />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
