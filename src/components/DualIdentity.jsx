import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, BookOpen, ArrowRight } from 'lucide-react';
import WordReveal from './WordReveal';

const DualIdentity = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const panelVariantsLeft = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const panelVariantsRight = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="dual-identity" style={{ padding: '120px 0', borderBottom: '1px solid var(--border-subtle)', position: 'relative' }}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'stretch'
          }}
        >
          {/* Left Column: Developer / Systems */}
          <motion.div
            variants={panelVariantsLeft}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '40px',
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.01)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <Terminal size={20} color="var(--text-secondary)" />
                <span className="font-mono" style={{ fontSize: '12px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px' }}>
                  Engineering Persona
                </span>
              </div>
              <h2 className="font-heading" style={{ fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: '1.1', marginBottom: '16px' }}>
                <WordReveal text="The Developer" />
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6', marginBottom: '32px' }}>
                Architecting algorithms and data-driven systems. Translating structural logic into performant web infrastructures and machine learning models.
              </p>
            </div>

            {/* Developer Preview Elements */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              <div style={{
                padding: '16px',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.04)',
                background: 'rgba(0,0,0,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div className="font-mono" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>PROJECT.01</div>
                  <div style={{ fontSize: '14px', fontWeight: '600' }}>LAWYER.AI</div>
                </div>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '4px', padding: '2px 6px' }}>AI Legal Infra</span>
              </div>

              <div style={{
                padding: '16px',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.04)',
                background: 'rgba(0,0,0,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div className="font-mono" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>PROJECT.02</div>
                  <div style={{ fontSize: '14px', fontWeight: '600' }}>ConceptLens</div>
                </div>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '4px', padding: '2px 6px' }}>SaaS Exploration</span>
              </div>
            </div>

            <a
              href="#work"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}
            >
              Explore Systems <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Right Column: Author / Sci-Fi */}
          <motion.div
            variants={panelVariantsRight}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '40px',
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.01)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <BookOpen size={20} color="var(--text-secondary)" />
                <span className="font-mono" style={{ fontSize: '12px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px' }}>
                  Narrative Persona
                </span>
              </div>
              <h2 className="font-heading" style={{ fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: '1.1', marginBottom: '16px' }}>
                <WordReveal text="The Author" />
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6', marginBottom: '32px' }}>
                Exploring philosophical concepts, recursive memory, and loops through the sci-fi novel duology **Ananta**. Mapping complex ideas onto narrative architectures.
              </p>
            </div>

            {/* Author Preview Elements */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              padding: '24px',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.04)',
              background: 'rgba(0,0,0,0.2)',
              marginBottom: '32px',
              minHeight: '120px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <svg width="180" height="70" viewBox="0 0 180 70" style={{ opacity: 0.4 }}>
                <path d="M 10 35 Q 45 10, 90 35 T 170 35" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                <path d="M 10 35 Q 45 60, 90 35 T 170 35" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="90" cy="35" r="8" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1" />
                <circle cx="35" cy="22" r="3" fill="rgba(255,255,255,0.3)" />
                <circle cx="145" cy="48" r="3" fill="rgba(255,255,255,0.3)" />
              </svg>
              <div style={{ position: 'absolute', bottom: '12px', right: '12px', fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                ANANTA.SYS
              </div>
            </div>

            <a
              href="#ananta"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}
            >
              Explore Narrative <ArrowRight size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DualIdentity;
