import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { LayoutDashboard, LogOut, User, Sun, Moon } from 'lucide-react';

const Navbar = () => {
    const { user, logout } = useAuth();
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Link to="/" className="logo">
                    Deep Scout <span>Pro</span>
                </Link>

                <div className="nav-links">
                    {!user ? (
                        <>
                            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Início</Link>
                            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>Sobre</Link>
                            <Link to="/pricing" className={`nav-link ${location.pathname === '/pricing' ? 'active' : ''}`}>Preços</Link>
                        </>
                    ) : (
                        <Link to="/search" className={`nav-link ${location.pathname.includes('/search') ? 'active' : ''}`}>
                            <LayoutDashboard size={18} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '4px' }} />
                            Pesquisa
                        </Link>
                    )}
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <button onClick={toggleTheme} style={{ background: 'none', border: 'none', color: 'var(--color-text)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    {user ? (
                        <>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text)' }}>
                                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <User size={18} color="white" />
                                </div>
                                <span style={{ fontSize: '0.9rem' }}>{user.name}</span>
                            </div>
                            <button onClick={handleLogout} className="btn btn-outline" style={{ padding: '0.5rem', border: 'none', color: 'var(--color-text-dim)' }}>
                                <LogOut size={20} />
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="nav-link" style={{ marginRight: '1rem' }}>Entrar</Link>
                            <Link to="/register" className="btn btn-primary">Aderir</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
