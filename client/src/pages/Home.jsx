import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';
import featureImg from '../assets/feature.png';

const Home = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "O que torna a Deep Scout diferente do instat ou synergy?",
            answer: "Enquanto outros te mostram o passado (box scores), nós prevemos o futuro. O nosso algoritmo proprietário cruza dados biométricos com eficiência de jogo para projetar a evolução do atleta nos próximos 3-5 anos."
        },
        {
            question: "Os dados são atualizados com que frequência?",
            answer: "Em tempo real. A nossa infraestrutura conecta-se diretamente às APIs oficiais das ligas parceiras. Assim que o apito soa, a nossa base de dados é atualizada."
        },
        {
            question: "Existe algum período de fidelização?",
        },
        {
            question: "Posso exportar os relatórios em PDF?",
            answer: "Sim! Podes gerar relatórios detalhados de qualquer jogador ou equipa e exportá-los instantaneamente para PDF ou Excel para partilhar com o teu staff técnico."
        },
        {
            question: "A plataforma funciona para escalões de formação?",
            answer: "Absolutamente. Temos bases de dados específicas para U16, U18 e U20, permitindo descobrir talentos precoces antes que cheguem aos grandes palcos."
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <section style={{
                padding: '8rem 0',
                textAlign: 'center',
                backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '600px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
            }}>
                <div className="container">
                    <span style={{
                        color: 'var(--color-primary)',
                        fontWeight: 700,
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        fontSize: '0.85rem',
                        marginBottom: '1.5rem',
                        display: 'block'
                    }}>
                        Scouting Profissional & Inteligência de Dados
                    </span>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
                        Antecipa o Futuro. <br /> Descobre Talentos <span style={{ color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text', backgroundImage: 'linear-gradient(to right, #0ea5e9, #6366f1)' }}>Antes da Concorrência.</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: '#cbd5e1', maxWidth: '650px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
                        Deixa de depender apenas da intuição. Acede à maior rede de dados de basquetebol do mercado e toma decisões de recrutamento baseadas em factos, não em palpites.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link to="/pricing" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                            Garantir Acesso Agora
                        </Link>
                        <Link to="/about" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                            Conhecer a Metodologia
                        </Link>
                    </div>
                </div>
            </section>

            {/* Feature Section */}
            <section style={{ padding: '6rem 0' }}>
                <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '5rem', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 800 }}>Não É Apenas Vídeo. <br />É A Ciência da Vitória.</h2>
                        <p style={{ color: 'var(--color-text-dim)', marginBottom: '2rem', fontSize: '1.15rem', lineHeight: 1.7 }}>
                            A nossa tecnologia proprietária transforma cada movimento em campo em dados acionáveis. Não te limitamos a mostrar o que aconteceu – dizemos-te o que vai acontecer a seguir.
                        </p>
                        <ul style={{ listStyle: 'none', color: 'var(--color-text-dim)' }}>
                            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem' }}>
                                <CheckCircle2 size={22} color="var(--color-primary)" />
                                <span><strong>Tracking Biométrico:</strong> Analisa a eficiência de movimento em tempo real.</span>
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem' }}>
                                <CheckCircle2 size={22} color="var(--color-primary)" />
                                <span><strong>Mapas de Calor Preditivos:</strong> Identifica zonas de perigo antes do lançamento.</span>
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem' }}>
                                <CheckCircle2 size={22} color="var(--color-primary)" />
                                <span><strong>Scout Grade™:</strong> O nosso índice exclusivo de potencial futuro.</span>
                            </li>
                        </ul>
                    </div>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <img src={featureImg} alt="Plataforma de Analytics Deep Scout" style={{ width: '100%', borderRadius: '1rem', boxShadow: '0 20px 40px -10px rgba(14, 165, 233, 0.2)' }} />
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section style={{ padding: '6rem 0', backgroundColor: 'var(--color-surface)' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '2.5rem' }}>Resultados Comprovados nas Grandes Ligas</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                        <div style={{ padding: '2.5rem', backgroundColor: 'var(--color-bg)', borderRadius: '1rem', border: '1px solid var(--color-border)' }}>
                            <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem', color: '#facc15' }}>★★★★★</div>
                            <p style={{ marginBottom: '2rem', fontStyle: 'italic', color: 'var(--color-text-dim)', lineHeight: 1.6, fontSize: '1.1rem' }}>
                                "A diferença entre um bom jogador e uma estrela está nos detalhes. A Deep Scout mostra-nos esses detalhes meses antes de qualquer outra ferramenta."
                            </p>
                            <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Mike Anderson</div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--color-primary)' }}>Head Scout, Euroliga Team</div>
                        </div>
                        <div style={{ padding: '2.5rem', backgroundColor: 'var(--color-bg)', borderRadius: '1rem', border: '1px solid var(--color-border)' }}>
                            <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem', color: '#facc15' }}>★★★★★</div>
                            <p style={{ marginBottom: '2rem', fontStyle: 'italic', color: 'var(--color-text-dim)', lineHeight: 1.6, fontSize: '1.1rem' }}>
                                "Otimizámos o nosso orçamento de scouting em 40% e aumentámos a taxa de sucesso nas contratações. Os números não mentem."
                            </p>
                            <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Sarah Johnson</div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--color-primary)' }}>Diretora de Recrutamento, NCAA D1</div>
                        </div>
                        <div style={{ padding: '2.5rem', backgroundColor: 'var(--color-bg)', borderRadius: '1rem', border: '1px solid var(--color-border)' }}>
                            <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem', color: '#facc15' }}>★★★★★</div>
                            <p style={{ marginBottom: '2rem', fontStyle: 'italic', color: 'var(--color-text-dim)', lineHeight: 1.6, fontSize: '1.1rem' }}>
                                "Num mercado tão competitivo, a Deep Scout é a nossa 'arma secreta'. Consigo filtrar 5.000 jogadores em minutos e focar no que interessa."
                            </p>
                            <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>David Chen</div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--color-primary)' }}>Agente FIBA Certificado</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section style={{ padding: '6rem 0', backgroundColor: 'var(--color-bg)' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>Dúvidas Frequentes</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {faqs.map((faq, index) => (
                            <div key={index} style={{ backgroundColor: 'var(--color-surface)', borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                                <button
                                    onClick={() => toggleFaq(index)}
                                    style={{
                                        width: '100%',
                                        padding: '1.5rem 2rem',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        background: 'none',
                                        border: 'none',
                                        color: 'var(--color-text)',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        fontSize: '1.15rem',
                                        fontWeight: 600
                                    }}
                                >
                                    {faq.question}
                                    {openFaq === index ? <ChevronUp size={20} color="var(--color-primary)" /> : <ChevronDown size={20} color="var(--color-text-dim)" />}
                                </button>
                                {openFaq === index && (
                                    <div style={{ padding: '0 2rem 2rem', color: 'var(--color-text-dim)', lineHeight: 1.7, fontSize: '1.05rem' }}>
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
