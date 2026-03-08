import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const AcademicsExperience = ({ userData }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const education = userData?.linkedin?.education || [];
    const experience = userData?.linkedin?.experience || [];

    return (
        <section id="academics" style={{
            padding: '100px 20px',
            maxWidth: '1000px',
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
                    <span className="text-highlight">01.</span> Background & Experience
                </h2>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '50px' }}>

                {/* Education Column */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                        <GraduationCap size={28} color="var(--accent-primary)" />
                        <h3 style={{ fontSize: '24px', margin: 0, color: 'var(--text-primary)', fontWeight: '700' }}>Academics</h3>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', borderLeft: '2px solid var(--border-strong)', paddingLeft: '20px' }}>
                        {education.map((edu, idx) => (
                            <motion.div key={idx} variants={itemVariants} style={{ position: 'relative' }}>
                                <div style={{
                                    position: 'absolute',
                                    left: '-27px',
                                    top: '5px',
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '0px',
                                    background: 'var(--bg-base)',
                                    border: '2px solid var(--accent-primary)'
                                }} />
                                <h4 style={{ margin: '0 0 5px 0', fontSize: '18px', color: 'var(--text-primary)', fontWeight: '700' }}>{edu.degree}</h4>
                                <p style={{ margin: '0 0 10px 0', fontSize: '15px', color: 'var(--text-secondary)' }}>{edu.institution}</p>
                                <span style={{
                                    background: 'transparent',
                                    border: '1px solid var(--border-strong)',
                                    color: 'var(--text-secondary)',
                                    padding: '4px 10px',
                                    borderRadius: '4px',
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                    letterSpacing: '1px'
                                }}>
                                    {edu.period} {edu.grade ? `| ${edu.grade}` : ''}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Experience Column */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                        <Briefcase size={28} color="var(--accent-primary)" />
                        <h3 style={{ fontSize: '24px', margin: 0, color: 'var(--text-primary)', fontWeight: '700' }}>Field Experience</h3>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', borderLeft: '2px solid var(--border-strong)', paddingLeft: '20px' }}>
                        {experience.map((exp, idx) => (
                            <motion.div key={idx} variants={itemVariants} style={{ position: 'relative' }}>
                                <div style={{
                                    position: 'absolute',
                                    left: '-27px',
                                    top: '5px',
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '0px',
                                    background: 'var(--bg-base)',
                                    border: '2px solid var(--accent-primary)'
                                }} />
                                <h4 style={{ margin: '0 0 5px 0', fontSize: '18px', color: 'var(--text-primary)', fontWeight: '700' }}>{exp.role}</h4>
                                <p style={{ margin: '0 0 10px 0', fontSize: '15px', color: 'var(--text-secondary)' }}>{exp.company}</p>
                                <div style={{ marginBottom: '15px' }}>
                                    <span style={{
                                        background: 'transparent',
                                        border: '1px solid var(--border-strong)',
                                        color: 'var(--text-secondary)',
                                        padding: '4px 10px',
                                        borderRadius: '4px',
                                        fontSize: '12px',
                                        fontWeight: 'bold',
                                        letterSpacing: '1px'
                                    }}>
                                        {exp.period}
                                    </span>
                                </div>
                                <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--text-secondary)', margin: 0 }}>
                                    {exp.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default AcademicsExperience;
