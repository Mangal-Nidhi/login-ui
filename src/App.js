import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </div>
  );
}

export default App;
