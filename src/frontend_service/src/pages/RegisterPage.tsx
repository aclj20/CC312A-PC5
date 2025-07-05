import React, { useState } from "react";
import { useNavigate } from "react-router";
import NavigationBar from "../components/NavigationBar";

const RegisterPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const API = "http://localhost:8000";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        try {
            const res = await fetch(`${API}/api/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            if (!res.ok) {
                const msg = await res.text();
                throw new Error(msg || 'Registration failed');
            }
            navigate('/login');
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <div className="items-center justify-center flex flex-col">
            <NavigationBar />
            <h2 className="text-2xl">Register</h2>
            <form onSubmit={handleSubmit} className="border-2 border-gray-300 p-4 rounded-md shadow-md w-fit space-y-2">
                <div>
                    <label>Username:</label>
                    <input
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required className="border-1 border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required className="border-1 border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <button type="submit" className="mt-4 px-4 py-1 border-1 rounded-sm">Sign Up</button>
            </form>
        </div>
    );
}

export default RegisterPage;