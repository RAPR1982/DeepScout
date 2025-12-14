import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const Pricing = () => {
    return (
        <div className="container" style={{ padding: '6rem 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }}>O Teu Retorno do Investimento Começa Aqui</h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--color-text-dim)', maxWidth: '600px', margin: '0 auto' }}>
                    Quanto vale para a tua equipa encontrar o próximo MVP antes dos rivais? Escolhe a ferramenta certa para o trabalho.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                {/* Basic Plan */}
                <div style={{ backgroundColor: 'var(--color-surface)', padding: '2.5rem', borderRadius: '1rem', border: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 600 }}>Scout Inicial</h3>
                    <p style={{ color: 'var(--color-text-dim)', marginBottom: '2rem', fontSize: '0.9rem' }}>Para entusiastas e scouts independentes.</p>
                    <div style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '2rem', color: 'var(--color-text)' }}>
                        €49 <span style={{ fontSize: '1.1rem', color: 'var(--color-text-dim)', fontWeight: 400 }}>/mês</span>
                    </div>
                    <ul style={{ listStyle: 'none', marginBottom: '3rem', color: 'var(--color-text-dim)', flex: 1 }}>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.2rem' }}><Check size={20} color="var(--color-primary)" /> Acesso à Base de Dados Global</li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.2rem' }}><Check size={20} color="var(--color-primary)" /> Perfis de Jogador Standard</li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.2rem' }}><Check size={20} color="var(--color-primary)" /> 30 Pesquisas / dia</li>
                    </ul>
                    <Link to="/register" className="btn btn-outline" style={{ width: '100%', padding: '1rem' }}>Começar Agora</Link>
                </div>

                {/* Pro Plan */}
                <div style={{ backgroundColor: 'rgba(14, 165, 233, 0.05)', padding: '2.5rem', borderRadius: '1rem', border: '2px solid var(--color-primary)', position: 'relative', display: 'flex', flexDirection: 'column', transform: 'scale(1.02)' }}>
                    <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'var(--color-primary)', color: 'white', padding: '0.4rem 1.2rem', borderRadius: '2rem', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px' }}>ESCOLHA DOS PROFISSIONAIS</div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-primary)', fontWeight: 700 }}>Vantagem Competitiva</h3>
                    <p style={{ color: 'var(--color-text-dim)', marginBottom: '2rem', fontSize: '0.9rem' }}>Para agências e equipas que exigem vitória.</p>
                    <div style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '2rem', color: 'var(--color-text)' }}>
                        €99 <span style={{ fontSize: '1.1rem', color: 'var(--color-text-dim)', fontWeight: 400 }}>/mês</span>
                    </div>
                    <ul style={{ listStyle: 'none', marginBottom: '3rem', flex: 1 }}>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.2rem' }}><Check size={20} color="var(--color-primary)" /> <strong>Tudo do Plano Inicial +</strong></li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.2rem' }}><Check size={20} color="var(--color-primary)" /> Acesso Ilimitado & Filtros Avançados</li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.2rem' }}><Check size={20} color="var(--color-primary)" /> Algoritmo Preditivo Scout Grade™</li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.2rem' }}><Check size={20} color="var(--color-primary)" /> Exportação de Relatórios PDF/CSV</li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.2rem' }}><Check size={20} color="var(--color-primary)" /> Comparador de Atletas</li>
                    </ul>
                    <Link to="/register" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>Garantir Vantagem Agora</Link>
                </div>

                {/* Enterprise Plan */}
                <div style={{ backgroundColor: 'var(--color-surface)', padding: '2.5rem', borderRadius: '1rem', border: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 600 }}>Dominância Global</h3>
                    <p style={{ color: 'var(--color-text-dim)', marginBottom: '2rem', fontSize: '0.9rem' }}>Para organizações de grande escala.</p>
                    <div style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem', color: 'var(--color-text)', paddingTop: '0.5rem' }}>
                        Sob Consulta
                    </div>
                    <ul style={{ listStyle: 'none', marginBottom: '3rem', color: 'var(--color-text-dim)', flex: 1 }}>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.2rem' }}><Check size={20} color="var(--color-primary)" /> Licenças Multi-utilizador</li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.2rem' }}><Check size={20} color="var(--color-primary)" /> API Dedicada & Integração CRM</li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.2rem' }}><Check size={20} color="var(--color-primary)" /> Relatórios de Scouting Personalizados</li>
                    </ul>
                    <button className="btn btn-outline" style={{ width: '100%', padding: '1rem' }}>Falar com Especialista</button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
