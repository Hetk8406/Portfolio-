import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Instagram, Twitter } from 'lucide-react';

const ContactFooter = ({ userData }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        // Fallback to my email if userData is missing
        const recipient = userData?.personalInfo?.email || "hetkikani990@gmail.com";
        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" style={{
            padding: '100px 20px',
            position: 'relative',
            background: 'var(--bg-base)',
            borderTop: '1px solid var(--border-subtle)'
        }}>


            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 10,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
                    gap: '60px',
                    alignItems: 'start'
                }}
            >
                {/* Left Column: Information & Stylized Map */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h2 className="text-highlight" style={{ fontSize: 'clamp(40px, 8vw, 60px)', margin: '0 0 20px 0', fontWeight: '900', letterSpacing: '-2px' }}>
                        04. Get In Touch
                    </h2>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.6', marginBottom: '40px', maxWidth: '500px' }}>
                        Whether you have a question, a project proposal, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '50px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ padding: '10px', background: 'var(--bg-surface)', border: '1px solid var(--border-strong)' }}>
                                <Mail size={24} color="var(--accent-primary)" />
                            </div>
                            <div>
                                <h4 style={{ margin: '0 0 5px 0', color: 'var(--text-secondary)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Email</h4>
                                <a href="mailto:hetkikani990@gmail.com" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 'bold' }}>
                                    hetkikani990@gmail.com
                                </a>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ padding: '10px', background: 'var(--bg-surface)', border: '1px solid var(--border-strong)' }}>
                                <MapPin size={24} color="var(--accent-primary)" />
                            </div>
                            <div>
                                <h4 style={{ margin: '0 0 5px 0', color: 'var(--text-secondary)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Location</h4>
                                <span style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>
                                    {userData?.personalInfo?.location || "India"}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '50px' }}>
                        <h4 style={{ margin: '0 0 15px 0', color: 'var(--text-secondary)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Social Profiles</h4>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            {userData?.personalInfo?.socialLinks?.twitter && (
                                <motion.a
                                    href={userData.personalInfo.socialLinks.twitter}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ y: -5, color: 'var(--accent-primary)', borderColor: 'var(--accent-primary)' }}
                                    style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        width: '45px', height: '45px',
                                        background: 'var(--bg-surface)', border: '1px solid var(--border-strong)',
                                        color: 'var(--text-primary)', transition: 'all 0.3s'
                                    }}
                                    aria-label="Twitter/X"
                                >
                                    <Twitter size={20} />
                                </motion.a>
                            )}
                            {userData?.personalInfo?.socialLinks?.instagram && (
                                <motion.a
                                    href={userData.personalInfo.socialLinks.instagram}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ y: -5, color: 'var(--accent-primary)', borderColor: 'var(--accent-primary)' }}
                                    style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        width: '45px', height: '45px',
                                        background: 'var(--bg-surface)', border: '1px solid var(--border-strong)',
                                        color: 'var(--text-primary)', transition: 'all 0.3s'
                                    }}
                                    aria-label="Instagram"
                                >
                                    <Instagram size={20} />
                                </motion.a>
                            )}
                            {userData?.personalInfo?.socialLinks?.linkedin && (
                                <motion.a
                                    href={userData.personalInfo.socialLinks.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ y: -5, color: 'var(--accent-primary)', borderColor: 'var(--accent-primary)' }}
                                    style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        width: '45px', height: '45px',
                                        background: 'var(--bg-surface)', border: '1px solid var(--border-strong)',
                                        color: 'var(--text-primary)', transition: 'all 0.3s'
                                    }}
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={20} />
                                </motion.a>
                            )}
                            {userData?.personalInfo?.socialLinks?.github && (
                                <motion.a
                                    href={userData.personalInfo.socialLinks.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ y: -5, color: 'var(--accent-primary)', borderColor: 'var(--accent-primary)' }}
                                    style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        width: '45px', height: '45px',
                                        background: 'var(--bg-surface)', border: '1px solid var(--border-strong)',
                                        color: 'var(--text-primary)', transition: 'all 0.3s'
                                    }}
                                    aria-label="GitHub"
                                >
                                    <Github size={20} />
                                </motion.a>
                            )}
                        </div>
                    </div>

                    {/* Stylized Map Representation */}
                    <div style={{
                        width: '100%',
                        height: '250px',
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-strong)',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: 'radial-gradient(var(--border-strong) 1px, transparent 1px)',
                            backgroundSize: '20px 20px',
                            opacity: 0.5
                        }} />
                        <div style={{
                            width: '20px',
                            height: '20px',
                            background: 'var(--accent-primary)',
                            borderRadius: '50%',
                            boxShadow: '0 0 0 10px rgba(37, 99, 235, 0.2)',
                            zIndex: 2
                        }} />
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div style={{
                    background: 'var(--bg-surface)',
                    padding: '40px',
                    border: '1px solid var(--border-strong)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
                }}>
                    <h3 style={{ margin: '0 0 30px 0', fontSize: '24px', fontWeight: '800' }}>Send a Message</h3>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Your Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                                style={{
                                    padding: '15px',
                                    background: 'var(--bg-base)',
                                    border: '1px solid var(--border-subtle)',
                                    color: 'var(--text-primary)',
                                    outline: 'none',
                                    fontSize: '16px',
                                    transition: 'border-color 0.3s'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                                onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Your Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="john@example.com"
                                style={{
                                    padding: '15px',
                                    background: 'var(--bg-base)',
                                    border: '1px solid var(--border-subtle)',
                                    color: 'var(--text-primary)',
                                    outline: 'none',
                                    fontSize: '16px',
                                    transition: 'border-color 0.3s'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                                onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Message</label>
                            <textarea
                                rows="5"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Hello! I'd like to discuss..."
                                style={{
                                    padding: '15px',
                                    background: 'var(--bg-base)',
                                    border: '1px solid var(--border-subtle)',
                                    color: 'var(--text-primary)',
                                    outline: 'none',
                                    fontSize: '16px',
                                    resize: 'vertical',
                                    transition: 'border-color 0.3s'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                                onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                            />
                        </div>

                        <motion.button
                            whileHover={{ y: -2, boxShadow: '0 4px 14px 0 rgba(37, 99, 235, 0.39)' }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            style={{
                                marginTop: '10px',
                                padding: '16px',
                                background: 'var(--accent-primary)',
                                border: 'none',
                                color: '#ffffff',
                                fontWeight: 'bold',
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                                fontSize: '14px',
                                cursor: 'pointer',
                                transition: 'background 0.3s'
                            }}
                        >
                            Transmit Message
                        </motion.button>
                    </form>
                </div>
            </motion.div>

            {/* Sub Footer Bar */}
            <div className="sub-footer" style={{
                maxWidth: '1200px',
                margin: '80px auto 0',
                paddingTop: '30px',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '20px'
            }}>
                <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-secondary)', letterSpacing: '1px', fontWeight: 'bold' }}>
                    &copy; {new Date().getFullYear()} {userData?.personalInfo?.name?.toUpperCase() || "HET KIKANI"}. ALL RIGHTS RESERVED.
                </p>

                <div style={{ display: 'flex', gap: '20px' }}>
                    <motion.a
                        href="https://github.com/Hetk8406"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -3, color: 'var(--accent-primary)' }}
                        style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                    >
                        <Github size={20} />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/het-kikani-67817236b/"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -3, color: 'var(--accent-primary)' }}
                        style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                    >
                        <Linkedin size={20} />
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default ContactFooter;
