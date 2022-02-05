import React, { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoadSpinner from './components/UI/Spinner/LoadSpinner';
const PrivateRoute = lazy(() =>
  import('./components/Auth/Routes/PrivateRoute')
);
const LoginPage = lazy(() => import('./pages/Auth/Login/LoginPage'));
const ResetPasswordPage = lazy(() =>
  import('./pages/Auth/ResetPassword/ResetPasswordPage')
);

function App() {
  return (
    <div className='App'>
      {/* Here Global layouts */}
      <Suspense fallback={<LoadSpinner />}>
        <Routes>
          <Route path='/' element={<Navigate replace to='/home' />} />
          <Route path='/home' element={<p>Home</p>} />
          <Route path='/signin' element={<LoginPage />} />
          <Route path='/signup' element={<p>SignUp</p>} />
          <Route path='/reset-password' element={<ResetPasswordPage />} />
          <Route
            path='/dashboard'
            element={
              <PrivateRoute>
                <p>Dashboard</p>
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
