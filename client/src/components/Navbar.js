import React, { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{ ...styles.nav, background: scrolled ? 'rgba(15,10,40,0.95)' : 'transparent' }}>
      <span style={styles.logo}>
        <span style={styles.logoT}>T</span>ejasre
        <span style={styles.logoDot}>✦</span>
      </span>
      <div style={styles.links}>
        {['About','Projects','Contact'].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} style={styles.link}>{item}</a>
        ))}
        <a href="#contact" style={styles.btn}>Hire Me 🚀</a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: 'fixed', top: 0, width: '100%', zIndex: 1000,
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '1.25rem 4rem', transition: 'background 0.4s',
    backdropFilter: 'blur(10px)'
  },
  logo: { fontWeight: '800', fontSize: '1.6rem', color: '#fff', letterSpacing: '-0.5px' },
  logoT: { color: '#f59e0b', fontSize: '1.8rem' },
  logoDot: { color: '#818cf8', marginLeft: '2px', fontSize: '1rem' },
  links: { display: 'flex', gap: '2rem', alignItems: 'center' },
  link: {
    textDecoration: 'none', color: 'rgba(255,255,255,0.85)', fontWeight: '500',
    fontSize: '0.95rem', transition: 'color 0.2s'
  },
  btn: {
    textDecoration: 'none',
    background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    color: '#fff', padding: '0.55rem 1.4rem', borderRadius: '25px',
    fontWeight: '700', fontSize: '0.9rem'
  }
};

export default Navbar;