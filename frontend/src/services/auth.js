import axios from 'axios'
const baseURL = 'https://intense-cove-72070.herokuapp.com/'

class AuthService{

    constructor(){
      this.service= axios.create({
        baseURL,
        withCredentials:true
      })
    }
    signup(data){
      return this.service.post('/signup',data)
    }
    login(data){
      return this.service.post('/login',data)
    }
    logout(){
      return this.service.get('/logout')
    }
}

export default AuthService