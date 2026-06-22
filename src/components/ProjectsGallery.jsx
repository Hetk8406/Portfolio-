import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github } from 'lucide-react';
import WordReveal from './WordReveal';

const ProjectsGallery = ({ userData }) => {
  const repositories = userData?.github?.repositories || [];

  const projectMocks = {
    "Indian Stock Predictor": {
      impact: "Algorithmic forecasting of equity prices using sequence regression models.",
      tags: ["Python", "LSTM", "Pandas", "Scikit-Learn"],
      link: "https://github.com/Hetk8406/Indian-Stock-Predictor",
      vector: (
        <svg width="100%" height="100" viewBox="0 0 300 100" fill="none" style={{ opacity: 0.8 }}>
          <path d="M 20 80 Q 80 50, 140 60 T 260 20" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
          <path d="M 20 80 Q 80 50, 140 60 T 260 20" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
          <circle cx="260" cy="20" r="3" fill="#EAEAEA" />
          <line x1="260" y1="20" x2="260" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="20" y1="80" x2="280" y2="80" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        </svg>
      )
    },
    "LAWYER.AI": {
      impact: "Full-stack legal assistant platform built with high-throughput inference nodes.",
      tags: ["React", "Python", "FastAPI", "LLM Integration"],
      link: "https://github.com/lawyerai-system",
      vector: (
        <svg width="100%" height="100" viewBox="0 0 300 100" fill="none" style={{ opacity: 0.8 }}>
          <rect x="50" y="20" width="200" height="60" rx="4" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <rect x="70" y="35" width="160" height="30" rx="2" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <line x1="90" y1="50" x2="210" y2="50" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <line x1="90" y1="56" x2="170" y2="56" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        </svg>
      )
    },
    "FoundIt!": {
      impact: "Distributed architecture for categorizing and mapping lost assets.",
      tags: ["JavaScript", "HTML", "Node.js", "Express"],
      link: "https://github.com/lostfound-system",
      vector: (
        <svg width="100%" height="100" viewBox="0 0 300 100" fill="none" style={{ opacity: 0.8 }}>
          <circle cx="150" cy="50" r="30" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <circle cx="150" cy="50" r="15" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="150" y1="10" x2="150" y2="90" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <line x1="100" y1="50" x2="200" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <circle cx="165" cy="35" r="2.5" fill="#EAEAEA" />
        </svg>
      )
    },
    "ConceptLens": {
      impact: "Visual exploration node framework to map concept relationships.",
      tags: ["React", "D3.js", "GraphDB", "TailwindCSS"],
      link: "https://github.com/conceptlens-system",
      vector: (
        <svg width="100%" height="100" viewBox="0 0 300 100" fill="none" style={{ opacity: 0.8 }}>
          <circle cx="90" cy="50" r="4" fill="#EAEAEA" />
          <circle cx="150" cy="30" r="4" fill="rgba(255,255,255,0.6)" />
          <circle cx="150" cy="70" r="4" fill="rgba(255,255,255,0.6)" />
          <circle cx="210" cy="50" r="4" fill="#EAEAEA" />
          <line x1="94" y1="50" x2="146" y2="30" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <line x1="94" y1="50" x2="146" y2="70" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <line x1="154" y1="30" x2="206" y2="50" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
          <line x1="154" y1="70" x2="206" y2="50" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        </svg>
      )
    }
  };

  const projectsToDisplay = repositories.filter(repo => projectMocks[repo.name]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  return (
    <section id="work" style={{ padding: '120px 0', borderBottom: '1px solid var(--border-subtle)', background: '#050505' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="section-tag">Engineering Showcase</span>
          <h2 className="font-heading" style={{ fontSize: 'clamp(32px, 5vw, 54px)', lineHeight: '1.1', marginBottom: '16px' }}>
            <WordReveal text="Selected Projects" />
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', maxWidth: '500px', margin: '0 auto' }}>
            Curated systems, libraries, and experimental architectures.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px'
          }}
        >
          {projectsToDisplay.map((project, idx) => {
            const details = projectMocks[project.name];
            return (
              <ProjectCard
                key={idx}
                project={project}
                details={details}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

// Sub-component to encapsulate subtle 3D spring-tilt logic per card
const ProjectCard = ({ project, details }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 250, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 250, damping: 25 });

  // Minimal controlled tilt limits (4 degrees max)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      <motion.div
        className="surface-card"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          height: '100%',
          position: 'relative'
        }}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Visual Representation Area */}
        <div style={{
          height: '140px',
          background: '#050505',
          borderRadius: '10px',
          border: '1px solid rgba(255,255,255,0.03)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          overflow: 'hidden',
          zIndex: 2
        }}>
          {details.vector}
        </div>

        {/* Metadata & Actions */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
          <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
            {project.role}
          </span>
          <div style={{ display: 'flex', gap: '12px' }}>
            {details.link && (
              <a
                href={details.link}
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                <Github size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Info Text */}
        <div style={{ flex: 1, zIndex: 2 }}>
          <h3 className="font-heading" style={{ fontSize: '20px', marginBottom: '8px' }}>
            {project.name}
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
            {details.impact}
          </p>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto', zIndex: 2 }}>
          {details.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="font-mono"
              style={{
                fontSize: '10px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '4px',
                padding: '2px 8px',
                color: 'var(--text-muted)'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsGallery;
