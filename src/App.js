import './App.css';
import Register from './Component/Register';
import { Routes, Route } from 'react-router-dom';
import Login from './Component/Login';
import Dashboard from './Component/Dashboard';
import Header from './Component/Header';


function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
