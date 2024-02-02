import React, { useContext, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../../Context/authContext'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {setLogin} = useContext(AuthContext)

    const handleLogin = async()=>{
        const data = {email, password}
        try {
            let res = await axios.post("https://reqres.in/api/login", data)
            if(res.data.token){
                setLogin(true)
            }
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <input type="email" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} />
        <input type="password" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login