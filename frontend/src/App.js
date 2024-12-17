import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/signUp';
import Login from './components/login';
import Dashboard from './components/dashboard';
import ProtectedRoute from './components/protectedRoute';
import PublicRoute from './components/publicRoute';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/signup" element={<PublicRoute element={<Signup />} />} />
                    <Route path="/login" element={<PublicRoute element={<Login />} />} />
                    <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;