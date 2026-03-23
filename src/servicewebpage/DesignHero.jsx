import React from 'react'
import './DesignHero.css'
import arrow from '../assets/icons/arrow.png'
import { motion } from 'framer-motion'
import StarsCanvas from './StarsCanvas'

const heroVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const DesignHero = () => {
    return (
        <section className="creative-section">
          <StarsCanvas />
          <motion.div className="creative-container" initial="hidden" animate="visible" variants={heroVariants}>
            <h1 className="creative-title">
              Build Faster. Scale Smarter.
              <br />
              Automate Everything.
            </h1>

            <p className="creative-desc">
              We design, develop, and deploy intelligent tech solutions that reduce costs, eliminate manual work, and accelerate your business growth — powered by AI from day one.
            </p>

            <a href='#connect' className="creative-btn">
              Start Your Project
              <img src={arrow} className="btn-arrow" alt="arrow icon" />
            </a>
          </motion.div>
        </section>
    )
}

export default DesignHero