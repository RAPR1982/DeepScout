import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Filter, Search, ChevronDown, Check } from 'lucide-react';

const Dashboard = () => {
    const { user } = useAuth();
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Filters
    const [filters, setFilters] = useState({
        position: [],
        minHeight: 1.80,
        maxHeight: 2.30,
        minPpg: 0,
        maxPpg: 40,
        search: ''
    });

    const positions = ['PG', 'SG', 'SF', 'PF', 'C'];

    useEffect(() => {
        fetchPlayers();
    }, [filters]);

    // Debounce effect could be added here for sliders/search

    const fetchPlayers = async () => {
        setLoading(true);
        // Build query string
        const params = new URLSearchParams();
        if (filters.position.length) params.append('position', filters.position.join(','));
        params.append('minHeight', filters.minHeight);
        params.append('maxHeight', filters.maxHeight);
        params.append('minPpg', filters.minPpg);
        params.append('maxPpg', filters.maxPpg);
        if (filters.search) params.append('search', filters.search);

        try {
            // Note: In manual mode without proxy running correctly, this might fail.
            // But we assume the code structure is what matters.
            const res = await fetch(`/api/players?${params.toString()}`);
            const data = await res.json();
            if (Array.isArray(data)) {
                setPlayers(data);
            }
        } catch (e) {
            console.error("Failed to fetch players", e);
            // Fallback for demo if API fails
            setPlayers([]);
        } finally {
            setLoading(false);
        }
    };

    const handlePositionChange = (pos) => {
        setFilters(prev => {
            const newPos = prev.position.includes(pos)
                ? prev.position.filter(p => p !== pos)
                : [...prev.position, pos];
            return { ...prev, position: newPos };
        });
    };

    return (
        <div className="container dashboard-container">
            {/* Sidebar Filters */}
            <aside className="dashboard-sidebar">
                <div style={{ backgroundColor: 'var(--color-surface)', padding: '1.5rem', borderRadius: '0.75rem' }}>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                        <Filter size={20} color="var(--color-primary)" /> Filtros
                    </h3>

                    <div style={{ marginBottom: '2rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Posição</label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {positions.map(pos => (
                                <button
                                    key={pos}
                                    onClick={() => handlePositionChange(pos)}
                                    style={{
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '1rem',
                                        border: `1px solid ${filters.position.includes(pos) ? 'var(--color-primary)' : 'var(--color-border)'}`,
                                        backgroundColor: filters.position.includes(pos) ? 'rgba(14, 165, 233, 0.2)' : 'transparent',
                                        color: filters.position.includes(pos) ? 'var(--color-primary)' : 'var(--color-text-dim)',
                                        fontSize: '0.875rem'
                                    }}
                                >
                                    {pos}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                            Altura: {filters.minHeight}m - {filters.maxHeight}m
                        </label>
                        <input
                            type="range"
                            min="1.60" max="2.30" step="0.01"
                            value={filters.minHeight}
                            onChange={(e) => setFilters({ ...filters, minHeight: e.target.value })}
                            style={{ width: '100%' }}
                        />
                        <input
                            type="range"
                            min="1.60" max="2.30" step="0.01"
                            value={filters.maxHeight}
                            onChange={(e) => setFilters({ ...filters, maxHeight: e.target.value })}
                            style={{ width: '100%' }}
                        />
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                            PPG: {filters.minPpg} - {filters.maxPpg}
                        </label>
                        <input
                            type="range"
                            min="0" max="40" step="1"
                            value={filters.minPpg}
                            onChange={(e) => setFilters({ ...filters, minPpg: e.target.value })}
                            style={{ width: '100%' }}
                        />
                        <input
                            type="range"
                            min="0" max="40" step="1"
                            value={filters.maxPpg}
                            onChange={(e) => setFilters({ ...filters, maxPpg: e.target.value })}
                            style={{ width: '100%' }}
                        />
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1 }}>
                <div className="dashboard-header" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2 style={{ whiteSpace: 'nowrap' }}>Base de Dados ({players.length})</h2>
                    <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
                        <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-dim)' }} />
                        <input
                            type="text"
                            placeholder="Pesquisar..."
                            value={filters.search}
                            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                            style={{
                                width: '100%',
                                padding: '0.75rem 1rem 0.75rem 2.5rem',
                                borderRadius: '0.5rem',
                                border: '1px solid var(--color-border)',
                                backgroundColor: 'var(--color-surface)',
                                color: 'var(--color-text)'
                            }}
                        />
                    </div>
                </div>

                <div style={{ backgroundColor: 'var(--color-surface)', borderRadius: '0.75rem', overflow: 'hidden' }}>
                    <table className="dashboard-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                                <th style={{ padding: '1rem' }}>Nome</th>
                                <th style={{ padding: '1rem' }}>Pos</th>
                                <th style={{ padding: '1rem' }}>Altura</th>
                                <th style={{ padding: '1rem' }}>Idade</th>
                                <th style={{ padding: '1rem' }}>Clube</th>
                                <th style={{ padding: '1rem' }}>PPG</th>
                                <th style={{ padding: '1rem' }}>Nota</th>
                            </tr>
                        </thead>
                        <tbody>
                            {players.map(player => (
                                <tr key={player.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                    <td data-label="Nome" style={{ padding: '1rem', fontWeight: 500 }}>{player.name}</td>
                                    <td data-label="Pos" style={{ padding: '1rem' }}><span style={{ backgroundColor: '#0f172a', color: 'white', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>{player.position}</span></td>
                                    <td data-label="Altura" style={{ padding: '1rem' }}>{player.height}m</td>
                                    <td data-label="Idade" style={{ padding: '1rem' }}>{player.age}</td>
                                    <td data-label="Clube" style={{ padding: '1rem', color: 'var(--color-text-dim)' }}>{player.club}</td>
                                    <td data-label="PPG" style={{ padding: '1rem', fontWeight: 600, color: 'var(--color-primary)' }}>{player.ppg}</td>
                                    <td data-label="Nota" style={{ padding: '1rem' }}>
                                        <span style={{
                                            color: player.grade.startsWith('A') ? '#4ade80' : player.grade.startsWith('B') ? '#facc15' : '#f87171',
                                            fontWeight: 700
                                        }}>
                                            {player.grade}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                            {players.length === 0 && !loading && (
                                <tr>
                                    <td colSpan="7" style={{ padding: '3rem', textAlign: 'center', color: 'var(--color-text-dim)' }}>
                                        Nenhum jogador encontrado com os filtros atuais.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
