import React from 'react';
import aboutTeamImg from '../assets/about-team.png';

const About = () => {
    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', fontWeight: 800 }}>Mais do que Dados. <br />É a Ciência da Vitória.</h1>

            <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '300px', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                    <img src={aboutTeamImg} alt="Deep Scout Team" style={{ width: '100%', display: 'block' }} />
                </div>

                <div style={{ flex: 1, minWidth: '300px', backgroundColor: 'var(--color-surface)', padding: '2.5rem', borderRadius: '1rem', lineHeight: 1.8 }}>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                        <strong>A maioria vê o jogo. Nós vemos o padrão.</strong>
                    </p>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-dim)' }}>
                        A Deep Scout nasceu de uma frustração partilhada por ex-scouts da NBA e cientistas de dados: havia demasiada informação, mas pouca <em>inteligência</em>. As folhas de estatísticas dizem-te quem marcou. Mas não te dizem quem criou o espaço, quem defendeu a linha de passe ou quem tem o potencial biomecânico para explodir na próxima época.
                    </p>
                    <p style={{ color: 'var(--color-text-dim)' }}>
                        Construímos a ferramenta que nós próprios queríamos usar. Uma plataforma que ignora o ruído e foca no sinal. Não democratizamos apenas o acesso a dados – democratizamos a capacidade de <strong>vencer campeonatos</strong>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
