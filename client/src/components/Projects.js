import React, { useState, useEffect } from 'react';

const colors = [
  { bg: 'linear-gradient(135deg, #667eea, #764ba2)', light: '#ede9fe' },
  { bg: 'linear-gradient(135deg, #f093fb, #f5576c)', light: '#fce7f3' },
  { bg: 'linear-gradient(135deg, #4facfe, #00f2fe)', light: '#e0f2fe' },
];

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/projects`)
      .then(res => res.json())
      .then(data => { setProjects(data); setLoading(false); })
      .catch(err => { console.error(err); setLoading(false); });
  }, []);

  if (loading) return (
    <div style={{ textAlign: 'center', padding: '5rem', fontSize: '1.2rem', color: '#8b5cf6' }}>
      ⚡ Loading projects...
    </div>
  );

  return (
    <section id="projects" style={styles.section}>
      <div style={styles.header}>
        <div style={styles.tag}>✦ MY WORK</div>
        <h2 style={styles.heading}>
          Featured <span style={styles.headingColor}>Projects</span>
        </h2>
        <p style={styles.sub}>Real projects built with real technologies</p>
      </div>

      <div style={styles.grid}>
        {projects.map((project, index) => {
          const color = colors[index % colors.length];
          return (
            <div key={project._id} style={styles.card}>
              <div style={{ ...styles.cardHeader, background: color.bg }}>
                <div style={styles.cardIcon}>💻</div>
                <div style={styles.cardNum}>0{index + 1}</div>
              </div>
              <div style={styles.cardBody}>
                <h3 style={styles.title}>{project.title}</h3>
                <p style={styles.desc}>{project.description}</p>
                <div style={styles.techRow}>
                  {project.techStack.map(tech => (
                    <span key={tech} style={{ ...styles.badge, background: color.light }}>{tech}</span>
                  ))}
                </div>
                <div style={styles.cardLinks}>
                  {project.githubUrl && (
                    <a href={project.githubUrl} style={styles.linkBtn} target="_blank" rel="noreferrer">
                      🔗 GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} style={styles.liveBtn} target="_blank" rel="noreferrer">
                      🌐 Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '6rem 5rem',
    background: 'linear-gradient(180deg, #f8faff 0%, #fff 100%)'
  },
  header: { textAlign: 'center', marginBottom: '4rem' },
  tag: {
    fontSize: '0.85rem', fontWeight: '700', color: '#8b5cf6',
    letterSpacing: '3px', marginBottom: '1rem'
  },
  heading: { fontSize: '2.8rem', fontWeight: '900', color: '#1a1a2e', marginBottom: '1rem' },
  headingColor: {
    background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
  },
  sub: { color: '#6b7280', fontSize: '1.05rem' },
  grid: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))',
    gap: '2rem', maxWidth: '1100px', margin: '0 auto'
  },
  card: {
    borderRadius: '20px', overflow: 'hidden',
    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
    border: '1px solid #f0f0f0', transition: 'transform 0.3s, box-shadow 0.3s',
    background: '#fff'
  },
  cardHeader: {
    padding: '2rem', display: 'flex',
    justifyContent: 'space-between', alignItems: 'center'
  },
  cardIcon: { fontSize: '2.5rem' },
  cardNum: { fontSize: '3rem', fontWeight: '900', color: 'rgba(255,255,255,0.3)' },
  cardBody: { padding: '1.5rem 2rem 2rem' },
  title: { fontSize: '1.3rem', fontWeight: '800', color: '#1a1a2e', marginBottom: '0.75rem' },
  desc: { color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.25rem' },
  techRow: { display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.5rem' },
  badge: {
    padding: '4px 12px', borderRadius: '20px',
    fontSize: '0.78rem', fontWeight: '700', color: '#4c1d95'
  },
  cardLinks: { display: 'flex', gap: '1rem' },
  linkBtn: {
    color: '#4F46E5', textDecoration: 'none', fontWeight: '700',
    fontSize: '0.9rem', padding: '0.5rem 1rem',
    background: '#ede9fe', borderRadius: '8px'
  },
  liveBtn: {
    color: '#059669', textDecoration: 'none', fontWeight: '700',
    fontSize: '0.9rem', padding: '0.5rem 1rem',
    background: '#d1fae5', borderRadius: '8px'
  }
};

export default Projects;