import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
// import styles from "./App.module.css";
import LoginPage from './pages/Auth/Login/LoginPage';

function App() {
  return (
    <div className='App'>
      {/* Here Global layouts */}
      <Routes>
        <Route path='/' element={<Navigate replace to='/home' />} />
        <Route path='/home' element={<p>Home</p>} />
        <Route path='/signin' element={<LoginPage />} />
        <Route path='/signup' element={<p>SignUp</p>} />
        <Route path='/dashboard' element={<p>Dashboard</p>} />
      </Routes>
    </div>
  );
}

export default App;
