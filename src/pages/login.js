import React, { useState } from 'react'
import {client} from '../supabase/client'

function Login() {
    const [email, setEmail] = useState('')
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            await client.auth.signInWithOtp({
                email
            })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='container' onSubmit={handleSubmit}>
            <form>
                <input type='email' name='email' placeholder='youremail@site.com'
                    onChange={e=>setEmail(e.target.value)}
                />
                <button>Iniciar sesión</button>
            </form>
        </div>
    )
}

export default Login