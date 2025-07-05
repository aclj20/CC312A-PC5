import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import NavigationBar from '../components/NavigationBar';

const LandingPage: React.FC = () => {
    const [username, setUsername] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }
        fetch('/api/auth/token', {
            headers: { 'Authorization': `Bearer ${token}` },
        })
            .then(res => {
                if (!res.ok) throw new Error('Not authenticated');
                return res.json();
            })
            .then(data => setUsername(data.user.username))
            .catch(() => navigate('/login'));
    }, [navigate]);

    if (!username) return null;

    return (
        <div>
            <NavigationBar />
            <span>Saludos, {username}</span>
        </div>
    );
};


export default LandingPage;