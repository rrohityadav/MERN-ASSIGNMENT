import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/dashboard.css'; 

function Dashboard() {
    const navigate = useNavigate(); 

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <div className="logo">My Dashboard</div>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#profile">Profile</a></li>
                        <li><a href="#settings">Settings</a></li>
                        <li><button type="button" onClick={handleLogout}>
                        Logout
                    </button></li>
                    </ul>
                </nav>
            </header>

            <div className="dashboard-body">
                <h2>Welcome to Your Dashboard</h2>
                <p>Here you can view all your activity and settings.</p>
            </div>

            <footer className="dashboard-footer">
                <p>© 2024 My Dashboard. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Dashboard;
