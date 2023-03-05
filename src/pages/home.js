import React, { useEffect } from 'react'
import { useNavigate } from'react-router-dom'
import { supabase } from "../supabase/client";

function Home() {
  const navigate =useNavigate();
  useEffect(() => {
    document.title = "Home";
    if (!supabase.auth.getUser()){
      navigate('/login')
    }
  }, [navigate]);
  return (
    <div>Home
      <button onClick={()=>supabase.auth.signOut()}>
        Logout
      </button>
    </div>
  )
}

export default Home
