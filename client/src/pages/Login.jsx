import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogIn } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const res = await login(email, password);
        if (res.success) {
            navigate('/search');
        } else {
            setError(res.message || 'Login falhou');
        }
    };

    return (
        <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '100%', maxWidth: '400px', padding: '2rem', backgroundColor: 'var(--color-surface)', borderRadius: '1rem', border: '1px solid var(--color-border)' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--color-primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                        <LogIn color="white" size={24} />
                    </div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Bem-vindo</h2>
                    <p style={{ color: 'var(--color-text-dim)' }}>Insere as tuas credenciais para aceder</p>
                </div>

                {error && <div style={{ backgroundColor: 'rgba(248, 113, 113, 0.2)', color: '#f87171', padding: '0.75rem', borderRadius: '0.5rem', marginBottom: '1.5rem', fontSize: '0.9rem' }}>{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>Endereço de Email</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)', color: 'white' }}
                            placeholder="demo@user.com"
                        />
                    </div>
                    <div style={{ marginBottom: '2rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>Palavra-passe</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)', color: 'white' }}
                            placeholder="password"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Entrar</button>
                </form>

                <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>
                    Não tens conta? <Link to="/register" style={{ color: 'var(--color-primary)' }}>Regista-te</Link>
                </div>
                <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-text-dim)' }}>
                    Credenciais Demo: demo@user.com / password
                </div>
            </div>
        </div>
    );
};

export default Login;
