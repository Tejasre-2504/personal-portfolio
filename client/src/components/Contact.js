import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.inner}>
        <div style={styles.left}>
          <div style={styles.tag}>✦ GET IN TOUCH</div>
          <h2 style={styles.heading}>
            Let's Build Something
            <span style={styles.headingColor}> Amazing</span> 🚀
          </h2>
          <p style={styles.sub}>
            I'm looking for internship and junior developer roles.
            If you have an opportunity or just want to connect, drop a message!
          </p>

          {[
            { icon: '📍', title: 'Location', value: 'Coimbatore (or) Chennai (or) Bangalore India' },
            { icon: '💼', title: 'Status', value: 'Open to opportunities' },
            { icon: '⚡', title: 'Response', value: 'Within 24 hours' },
          ].map((item, i) => (
            <div key={i} style={styles.infoCard}>
              <div style={styles.infoIcon}>{item.icon}</div>
              <div>
                <div style={styles.infoTitle}>{item.title}</div>
                <div style={styles.infoValue}>{item.value}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.right}>
          {sent ? (
            <div style={styles.successBox}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
              <h3 style={styles.successTitle}>Message Sent!</h3>
              <p style={styles.successSub}>Thanks for reaching out. I'll reply soon!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={styles.form}>
              <h3 style={styles.formTitle}>Send a Message</h3>
              {[
                { name: 'name', label: '👤 Your Name', type: 'text', placeholder: 'John Doe' },
                { name: 'email', label: '📧 Email Address', type: 'email', placeholder: 'john@example.com' },
              ].map(field => (
                <div key={field.name} style={styles.formGroup}>
                  <label style={styles.label}>{field.label}</label>
                  <input
                    name={field.name} type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.name]}
                    onChange={handleChange}
                    style={styles.input} required
                  />
                </div>
              ))}
              <div style={styles.formGroup}>
                <label style={styles.label}>💬 Message</label>
                <textarea
                  name="message" placeholder="Tell me about your project..."
                  value={form.message} onChange={handleChange}
                  style={styles.textarea} required
                />
              </div>
              <button type="submit" style={styles.btn} disabled={loading}>
                {loading ? '⏳ Sending...' : '🚀 Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>

      <div style={styles.footer}>
        <p style={styles.footerText}>
          Built with ⚛️ React · 🟢 Node.js · 🍃 MongoDB &nbsp;|&nbsp;
          <span style={styles.footerName}>Tejasre Karthikeyan © 2026</span>
        </p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '6rem 5rem 3rem',
    background: 'linear-gradient(135deg, #0f0a28 0%, #1a0533 60%, #0d1b4b 100%)'
  },
  inner: { display: 'flex', gap: '4rem', maxWidth: '1100px', margin: '0 auto 4rem', alignItems: 'flex-start', flexWrap: 'wrap' },
  left: { flex: 1, minWidth: '280px' },
  tag: { fontSize: '0.85rem', fontWeight: '700', color: '#f59e0b', letterSpacing: '3px', marginBottom: '1rem' },
  heading: { fontSize: '2.5rem', fontWeight: '900', color: '#fff', lineHeight: '1.2', marginBottom: '1rem' },
  headingColor: {
    background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
  },
  sub: { color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '2rem' },
  infoCard: {
    display: 'flex', alignItems: 'center', gap: '1rem',
    background: 'rgba(255,255,255,0.06)', borderRadius: '12px',
    padding: '1rem 1.25rem', marginBottom: '1rem',
    border: '1px solid rgba(255,255,255,0.1)'
  },
  infoIcon: { fontSize: '1.5rem' },
  infoTitle: { fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontWeight: '600', marginBottom: '2px' },
  infoValue: { fontSize: '0.95rem', color: '#fff', fontWeight: '600' },
  right: { flex: 1, minWidth: '300px' },
  form: {
    background: '#fff', borderRadius: '20px',
    padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem'
  },
  formTitle: { fontSize: '1.4rem', fontWeight: '800', color: '#1a1a2e', marginBottom: '0.5rem' },
  formGroup: { display: 'flex', flexDirection: 'column', gap: '0.4rem' },
  label: { fontSize: '0.85rem', fontWeight: '700', color: '#374151' },
  input: {
    padding: '0.85rem 1rem', borderRadius: '10px',
    border: '2px solid #f0f0f0', fontSize: '0.95rem',
    outline: 'none', transition: 'border 0.2s'
  },
  textarea: {
    padding: '0.85rem 1rem', borderRadius: '10px',
    border: '2px solid #f0f0f0', fontSize: '0.95rem',
    minHeight: '130px', resize: 'vertical', outline: 'none'
  },
  btn: {
    background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
    color: '#fff', padding: '1rem', border: 'none',
    borderRadius: '10px', fontSize: '1rem', cursor: 'pointer',
    fontWeight: '800', boxShadow: '0 8px 24px rgba(139,92,246,0.4)'
  },
  successBox: {
    background: '#fff', borderRadius: '20px', padding: '4rem 2rem',
    textAlign: 'center'
  },
  successTitle: { fontSize: '1.8rem', fontWeight: '900', color: '#059669', marginBottom: '0.5rem' },
  successSub: { color: '#6b7280', fontSize: '1rem' },
  footer: { textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' },
  footerText: { color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' },
  footerName: { color: '#f59e0b', fontWeight: '600' }
};

export default Contact;