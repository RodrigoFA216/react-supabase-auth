import React, { useState, useEffect } from 'react'
import {supabase} from '../supabase/client'
import {useNavigate} from 'react-router-dom'


function Login() {
    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await supabase.auth.signInWithOtp({
                email
            })
        } catch (error) {
            // console.log(error) trabajo a futuro: regresar a esta página con el error
        }
    }
    const navigate=useNavigate();
    
    useEffect(() => {
        document.title = "Login"
        
        async function getInfoUser(){
            const { data: { user } } = await supabase.auth.getUser()
            return user
        }
        try {
            const user = getInfoUser();
            
            const authToken = JSON.parse(localStorage.getItem('sb-cuplvwpdnzrkzpoxofvt-auth-token'))
            const datauser = authToken.user
            if(user.PromiseResult || datauser!=null){
                navigate('/')
            }
        } catch (error) {
            // console.log(error); trabajo a futuro: regresar a esta página con el error
        }
        
    }, [navigate])
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <input type='email' name='email' placeholder='youremail@site.com'
                    onChange={e=>setEmail(e.target.value)}
                />
                <button>Iniciar sesión</button>
            </form>
        </div>
    )
}

export default Login