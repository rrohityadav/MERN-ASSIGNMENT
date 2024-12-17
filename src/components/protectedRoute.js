import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element: Component, ...rest }) {
    const isAuthenticated = localStorage.getItem('token'); 

    return isAuthenticated ? Component : <Navigate to="/dashboard" />;
}

export default ProtectedRoute;