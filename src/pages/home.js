import React, { useEffect } from 'react'
import { useNavigate } from'react-router-dom'
import { supabase } from "../supabase/client";
import EvalForm from '../components/EvalForm'

function Home() {
  const navigate =useNavigate();
  useEffect(() => {
    document.title = "Home";
    // async function getInfoUser(){
    //   const { data: { user } } = await supabase.auth.getUser()
    //   return user
    // }
    // const user = getInfoUser();
    // console.log(user.PromiseResult);
    try {
      const authToken = JSON.parse(localStorage.getItem('sb-cuplvwpdnzrkzpoxofvt-auth-token'))
      // eslint-disable-next-line
      const datauser = authToken.user
      // console.log(datauser);
    } catch (error) {
      navigate('/login')
    }
  }, [navigate]);
  return (
    <div>
      <h1>Home</h1>
      <button onClick={()=>supabase.auth.signOut()}>
        Logout
      </button>
      <EvalForm/>
    </div>
  )
}

export default Home
