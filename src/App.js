import './App.css';
import Login from './pages/login';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
