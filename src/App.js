import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import earth from './earth.jpg';

function App() {
  return (
    <div className="App">
                <div style={{width: "50%" , float: "left", alignItems: "flex-start"}}>
                    <img alt="" src={earth} height={700} width={700}/>
                </div>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </div>
  );
}

export default App;
