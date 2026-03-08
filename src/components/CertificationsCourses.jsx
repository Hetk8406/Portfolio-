import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const CertificationsCourses = ({ userData }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    };

    const certifications = userData?.linkedin?.certifications || [];

    if (certifications.length === 0) return null;

    return (
        <section id="certifications" style={{
            padding: '100px 20px',
            maxWidth: '1200px',
            margin: '0 auto',
            position: 'relative'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', margin: '0 0 50px 0', borderBottom: '1px solid var(--border-strong)', paddingBottom: '20px', fontWeight: '800', letterSpacing: '-1px' }}>
                    <span className="text-highlight">03.</span> Certifications & Courses
                </h2>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
                    gap: '30px'
                }}
            >
                {certifications.map((cert, idx) => (
                    <motion.a
                        key={idx}
                        href={cert.link !== "#" ? cert.link : null}
                        target="_blank"
                        rel="noreferrer"
                        variants={itemVariants}
                        whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)', borderColor: 'var(--accent-primary)' }}
                        style={{
                            background: 'var(--bg-surface)',
                            border: '1px solid var(--border-subtle)',
                            padding: '30px',
                            display: 'flex',
                            flexDirection: 'column',
                            textDecoration: 'none',
                            color: 'inherit',
                            transition: 'all 0.3s ease',
                            cursor: cert.link !== "#" ? 'pointer' : 'default'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                            <Award size={32} color="var(--accent-primary)" />
                            {cert.link !== "#" && <ExternalLink size={18} color="var(--text-secondary)" />}
                        </div>

                        <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: 'var(--text-primary)', fontWeight: '700' }}>
                            {cert.name}
                        </h3>

                        <p style={{ margin: '0 0 20px 0', color: 'var(--text-secondary)', fontSize: '14px', flex: 1 }}>
                            {cert.issuer}
                        </p>

                        <div style={{ marginTop: 'auto' }}>
                            <span style={{
                                fontSize: '12px',
                                color: 'var(--text-secondary)',
                                border: '1px solid var(--border-strong)',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                fontWeight: 'bold'
                            }}>
                                {cert.date}
                            </span>
                        </div>
                    </motion.a>
                ))}
            </motion.div>
        </section>
    );
};

export default CertificationsCourses;
