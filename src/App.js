import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import './App.css';

import Login from './pages/login';
import Home from './pages/home';
import NotFound from './pages/notFound';

import { supabase } from "./supabase/client";


function App() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if(!session){
        navigate('/login');
      }else{
        navigate('/');
      }
    })
  }, [navigate]);
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
