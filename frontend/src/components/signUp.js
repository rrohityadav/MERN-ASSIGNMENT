import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/signUp.css';

function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords are not match.');
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/signUp", 
                {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    confirmPassword:formData.confirmPassword,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            setSuccessMessage('Signup successful!');
            if(response.data){
             navigate('/login');
            }
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            setError(error.response?.data?.message || 'Signup failed. Please try again.');
        }
    };

    return (
        <div className="signup-container-wrapper">
            <div className="signup-container">
                <h2 className="signup-header">Signup</h2>
                <form onSubmit={handleSubmit} className="signup-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="input-field"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input-field"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="input-field"
                        required
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="input-field"
                        required
                    />
                    <button type="submit" className="submit-btn">Signup</button>
                </form>
                {error && <p className="error-message">{error}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
            </div>
        </div>
    );
}

export default Signup;
