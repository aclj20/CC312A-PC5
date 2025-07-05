import React, { useState } from "react";
import { useNavigate } from "react-router";
import NavigationBar from "../components/NavigationBar";

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            if (!res.ok) {
                const msg = await res.text();
                throw new Error(msg || 'Login failed');
            }
            const { token } = await res.json();
            localStorage.setItem('token', token);
            navigate('/');
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <div>
            <NavigationBar />
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}

export default LoginPage;