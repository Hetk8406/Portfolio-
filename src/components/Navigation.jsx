import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'HOME', href: '#home' },
        { name: 'ACADEMICS', href: '#academics' },
        { name: 'PROJECTS', href: '#projects' },
        { name: 'CERTIFICATIONS', href: '#certifications' },
        { name: 'CONTACT', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                padding: '20px 0',
                transition: 'all 0.3s ease',
                background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent'
            }}
        >
            <div className="nav-container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ fontWeight: 'bold', fontSize: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                    <span style={{ color: 'var(--text-primary)', letterSpacing: '1px' }}>HET<span style={{ color: 'var(--accent-primary)', fontWeight: '900' }}>KIKANI</span></span>
                </motion.div>

                <ul className="nav-links" style={{ display: 'flex', gap: '30px', listStyle: 'none', margin: 0, padding: 0 }}>
                    {navLinks.map((link, i) => (
                        <motion.li
                            key={link.name}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 + 0.5 }}
                        >
                            <motion.a
                                className="nav-link-item"
                                href={link.href}
                                whileHover={{ color: 'var(--accent-primary)' }}
                                style={{
                                    color: 'var(--text-secondary)',
                                    textDecoration: 'none',
                                    fontSize: '14px',
                                    letterSpacing: '1px',
                                    textTransform: 'uppercase',
                                    fontWeight: '500',
                                    transition: 'color 0.2s ease'
                                }}
                            >
                                {link.name}
                            </motion.a>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navigation;
