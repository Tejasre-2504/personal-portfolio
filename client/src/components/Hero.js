import React from 'react';

function Hero() {
  return (
    <section style={styles.section}>
      <div style={styles.bg1}></div>
      <div style={styles.bg2}></div>
      <div style={styles.bg3}></div>

      <div style={styles.container}>
        <div style={styles.badge}>
          <span style={styles.badgeDot}></span>
          Available for Internship & Jobs
        </div>

        <h1 style={styles.name}>
          Hi, I'm <span style={styles.highlight}>Tejasre</span> 👋
        </h1>
        <h2 style={styles.role}>
          <span style={styles.roleWord1}>Full-Stack</span>{' '}
          <span style={styles.roleWord2}>Developer</span>
        </h2>

        <p style={styles.bio}>
          I craft beautiful, fast & scalable web apps using
          <span style={styles.techTag}> ⚛️ React</span>,
          <span style={styles.techTag}> 🟢 Node.js</span> &
          <span style={styles.techTag}> 🍃 MongoDB</span>
        </p>

        <div style={styles.btnRow}>
          <a href="#projects" style={styles.btnPrimary}>🚀 View My Work</a>
          <a href="#contact" style={styles.btnSecondary}>💬 Let's Talk</a>
        </div>

        <div style={styles.stats}>
          {[
            { num: '3+', label: 'Projects Built' },
            { num: '2+', label: 'Months Exp' },
            { num: '5+', label: 'Technologies' }
          ].map((s, i) => (
            <div key={i} style={styles.statCard}>
              <span style={styles.statNum}>{s.num}</span>
              <span style={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.right}>
        <div style={styles.avatarRing}>
          <div style={styles.avatar}>TK</div>
        </div>
        <div style={{ ...styles.floatCard, ...styles.card1 }}>⚛️ React.js</div>
        <div style={{ ...styles.floatCard, ...styles.card2 }}>🟢 Node.js</div>
        <div style={{ ...styles.floatCard, ...styles.card3 }}>🍃 MongoDB</div>
        <div style={{ ...styles.floatCard, ...styles.card4 }}>🎨 CSS3</div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: '100vh', display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', padding: '7rem 5rem 4rem',
    background: 'linear-gradient(135deg, #0f0a28 0%, #1a0533 40%, #0d1b4b 100%)',
    position: 'relative', overflow: 'hidden'
  },
  bg1: {
    position: 'absolute', width: '500px', height: '500px', borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
    top: '-100px', left: '-100px', pointerEvents: 'none'
  },
  bg2: {
    position: 'absolute', width: '400px', height: '400px', borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(245,158,11,0.2) 0%, transparent 70%)',
    bottom: '-50px', right: '200px', pointerEvents: 'none'
  },
  bg3: {
    position: 'absolute', width: '300px', height: '300px', borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)',
    top: '200px', right: '100px', pointerEvents: 'none'
  },
  container: { maxWidth: '600px', zIndex: 1 },
  badge: {
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    background: 'rgba(255,255,255,0.08)', color: '#86efac',
    padding: '0.5rem 1.2rem', borderRadius: '25px', fontSize: '0.85rem',
    fontWeight: '600', marginBottom: '1.5rem',
    border: '1px solid rgba(134,239,172,0.3)'
  },
  badgeDot: {
    width: '8px', height: '8px', borderRadius: '50%',
    background: '#22c55e', display: 'inline-block',
    animation: 'pulse 2s infinite'
  },
  name: {
    fontSize: '3.8rem', fontWeight: '900', color: '#fff',
    lineHeight: '1.1', marginBottom: '0.5rem'
  },
  highlight: {
    background: 'linear-gradient(135deg, #f59e0b, #ef4444, #8b5cf6)',
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
  },
  role: { fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' },
  roleWord1: { color: '#818cf8' },
  roleWord2: { color: '#f0abfc' },
  bio: {
    fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)',
    lineHeight: '1.9', marginBottom: '2.5rem'
  },
  techTag: {
    background: 'rgba(255,255,255,0.1)', color: '#fff',
    padding: '2px 10px', borderRadius: '8px', fontWeight: '600'
  },
  btnRow: { display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' },
  btnPrimary: {
    background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
    color: '#fff', padding: '0.9rem 2rem', borderRadius: '12px',
    textDecoration: 'none', fontWeight: '700', fontSize: '1rem',
    boxShadow: '0 8px 24px rgba(139,92,246,0.4)'
  },
  btnSecondary: {
    background: 'rgba(255,255,255,0.08)', color: '#fff',
    padding: '0.9rem 2rem', borderRadius: '12px',
    textDecoration: 'none', fontWeight: '700', fontSize: '1rem',
    border: '1px solid rgba(255,255,255,0.2)'
  },
  stats: { display: 'flex', gap: '1rem', flexWrap: 'wrap' },
  statCard: {
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    background: 'rgba(255,255,255,0.06)', borderRadius: '12px',
    padding: '1rem 1.5rem', border: '1px solid rgba(255,255,255,0.1)'
  },
  statNum: { fontSize: '1.8rem', fontWeight: '900', color: '#f59e0b' },
  statLabel: { fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: '2px' },
  right: { position: 'relative', width: '380px', height: '420px', zIndex: 1 },
  avatarRing: {
    position: 'absolute', top: '50%', left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '220px', height: '220px', borderRadius: '50%',
    background: 'linear-gradient(135deg, #8b5cf6, #3b82f6, #f59e0b)',
    padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center'
  },
  avatar: {
    width: '100%', height: '100%', borderRadius: '50%',
    background: 'linear-gradient(135deg, #1a0533, #0d1b4b)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '3rem', fontWeight: '900', color: '#fff', letterSpacing: '-2px'
  },
  floatCard: {
    position: 'absolute', background: 'rgba(255,255,255,0.95)',
    padding: '0.6rem 1rem', borderRadius: '12px',
    fontWeight: '700', fontSize: '0.9rem', color: '#1a1a2e',
    boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
    animation: 'float 3s ease-in-out infinite'
  },
  card1: { top: '20px', left: '0px', animationDelay: '0s' },
  card2: { top: '20px', right: '0px', animationDelay: '0.5s' },
  card3: { bottom: '60px', left: '0px', animationDelay: '1s' },
  card4: { bottom: '60px', right: '0px', animationDelay: '1.5s' }
};

export default Hero;