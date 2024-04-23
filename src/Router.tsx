import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const Contacts = React.lazy(() => import('./pages/contacts'));
const Profile = React.lazy(() => import('./pages/profile'));
const Login = React.lazy(() => import('./pages/auth/login'));
const Signup = React.lazy(() => import('./pages/auth/signup'));

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Contacts />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Suspense>
    )
}

export default App
