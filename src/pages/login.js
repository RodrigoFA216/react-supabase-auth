import React, { useState, useEffect } from 'react'
import {supabase} from '../supabase/client'
import {useNavigate} from 'react-router-dom'

function Login() {
        const navigate=useNavigate()
        const [loading, setLoading] = useState(true)

    useEffect(() => {
        document.title = "Login"
        const session = supabase.auth.session()

        if (session) {
        navigate('/')
        } else {
        setLoading(false)
        }
    }, [navigate])

    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        await supabase.auth.signInWithOtp({
            email
        })
        } catch (error) {
        console.log(error)
        }
    }

    if (loading) return <div>Loading...</div>
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