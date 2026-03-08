import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Star, GitFork, ExternalLink, Shield } from 'lucide-react';

const ProjectsGallery = ({ userData }) => {
    const repositories = userData?.github?.repositories || [];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 100, damping: 15 }
        },
        hover: {
            y: -5,
            scale: 1.01,
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
            borderColor: 'var(--accent-primary)',
            transition: { type: 'spring', stiffness: 400, damping: 10 }
        }
    };

    return (
        <section id="projects" style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', margin: '0 0 50px 0', borderBottom: '1px solid var(--border-strong)', paddingBottom: '20px', fontWeight: '800', letterSpacing: '-1px' }}>
                    <span className="text-highlight">02.</span> Classified Projects
                </h2>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
                    gap: '30px'
                }}
            >
                {repositories.map((repo, idx) => (
                    <motion.div
                        key={idx}
                        variants={cardVariants}
                        whileHover="hover"
                        style={{
                            background: 'var(--bg-surface)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: '0px',
                            padding: '30px',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            cursor: 'pointer'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                            <FolderGit2 size={40} color="var(--accent-primary)" />
                            {repo.url ? (
                                <a href={repo.url} target="_blank" rel="noreferrer" style={{ marginLeft: 'auto', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center' }}>
                                    <ExternalLink size={20} />
                                </a>
                            ) : (
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                                        <Star size={14} /> {Math.floor(Math.random() * 50) + 1}
                                    </span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                                        <GitFork size={14} /> {Math.floor(Math.random() * 20)}
                                    </span>
                                </div>
                            )}
                        </div>

                        <h3 style={{ margin: '0 0 15px 0', fontSize: '20px', color: 'var(--text-primary)', fontWeight: '700' }}>
                            {repo.name}
                        </h3>

                        <p style={{ margin: '0 0 30px 0', color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6', flex: 1 }}>
                            {repo.description}
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: 'auto' }}>
                            {repo.language && (
                                <span style={{
                                    fontFamily: 'monospace',
                                    fontSize: '12px',
                                    color: 'var(--text-secondary)',
                                    border: '1px solid var(--border-strong)',
                                    padding: '4px 8px',
                                    borderRadius: '4px'
                                }}>
                                    {repo.language}
                                </span>
                            )}
                            {repo.role && (
                                <span style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px',
                                    fontSize: '12px',
                                    color: 'var(--accent-primary)',
                                    border: '1px solid var(--accent-primary)',
                                    background: 'transparent',
                                    padding: '4px 8px',
                                    borderRadius: '4px',
                                    textTransform: 'uppercase',
                                    fontWeight: 'bold'
                                }}>
                                    <Shield size={12} /> {repo.role}
                                </span>
                            )}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default ProjectsGallery;
