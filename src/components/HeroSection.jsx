import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Code } from 'lucide-react';

const HeroSection = ({ userData }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '100px 20px 0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Main Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{
                    maxWidth: '1200px',
                    width: '100%',
                    zIndex: 10,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap-reverse',
                    gap: '50px'
                }}
            >
                {/* Text Section (Left) */}
                <div className="hero-text-content" style={{ flex: '1 1 min(100%, 500px)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <motion.div variants={itemVariants} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Terminal size={20} color="var(--accent-primary)" />
                        <span style={{ color: 'var(--accent-primary)', letterSpacing: '2px', fontSize: '14px', textTransform: 'uppercase', fontWeight: 'bold' }}>
                            Welcome to my digital workspace
                        </span>
                    </motion.div>

                    <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(38px, 8vw, 90px)', margin: '0 0 10px 0', lineHeight: '1', fontWeight: '900', letterSpacing: '-2px' }}>
                        {userData?.personalInfo?.name || "Initializing..."}
                    </motion.h1>

                    <motion.h2 variants={itemVariants} className="text-highlight" style={{ fontSize: 'clamp(18px, 4vw, 32px)', margin: '0 0 30px 0', fontWeight: '600' }}>
                        {userData?.personalInfo?.headline || "Software Engineer"}
                    </motion.h2>

                    <motion.p variants={itemVariants} style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.6', maxWidth: '600px', marginBottom: '50px' }}>
                        Deploying cutting-edge digital experiences. Specializing in high-performance web applications, 2D animations, and robust system architectures.
                    </motion.p>

                    <motion.div className="hero-buttons" variants={itemVariants} style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                        <motion.a
                            href="#projects"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                                padding: '16px 32px',
                                background: 'var(--accent-primary)',
                                border: '1px solid var(--accent-primary)',
                                color: '#ffffff',
                                borderRadius: '0px',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                                fontSize: '14px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                boxShadow: '0 4px 14px 0 rgba(37, 99, 235, 0.39)'
                            }}
                        >
                            <Code size={18} /> View Repositories
                        </motion.a>

                        <motion.a
                            href="#contact"
                            whileHover={{ y: -2, background: 'var(--bg-base)' }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                                padding: '16px 32px',
                                background: 'transparent',
                                border: '1px solid var(--border-strong)',
                                color: 'var(--text-primary)',
                                borderRadius: '0px',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                                fontSize: '14px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}
                        >
                            <Database size={18} /> Establish Link
                        </motion.a>
                    </motion.div>
                </div>

                {/* Profile Image Section (Right) */}
                {userData?.personalInfo?.profilePicture && (
                    <motion.div
                        variants={itemVariants}
                        style={{
                            flex: '0 0 auto',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <img
                            src={userData.personalInfo.profilePicture}
                            alt={userData.personalInfo.name}
                            onError={(e) => {
                                // Fallback if regular URL fails or is blocked by adblockers
                                e.target.onError = null;
                                e.target.src = 'https://api.dicebear.com/9.x/initials/svg?seed=HK&backgroundColor=2563eb&textColor=ffffff';
                            }}
                            style={{
                                width: 'min(350px, 80vw)',
                                height: 'min(350px, 80vw)',
                                objectFit: 'cover',
                                border: '1px solid var(--border-strong)',
                                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                                borderRadius: '12px'
                            }}
                        />
                    </motion.div>
                )}
            </motion.div>
        </section>
    );
};

export default HeroSection;
