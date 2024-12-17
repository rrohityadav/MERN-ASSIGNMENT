import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css'

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState(''); 
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage(''); 

        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/login", 
                {
                    email: formData.email,
                    password: formData.password,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            setSuccessMessage('Login successful!');
            if(response.data){
                localStorage.setItem('token',response.data.token)
             navigate('/dashboard');
            }
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            setError(error.response?.data?.message || 'Login failed. Please try again.');
        }

    };
    
    return (
        <div className='login-container-wrapper'>
            <div className="login-container">
            <h2 className="login-header">Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="input-field"
                />
                <button type="submit" className="submit-btn">Login</button>
            </form>
            {error && <p className="error-message">{error}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
        </div>
    );
}

export default Login;
