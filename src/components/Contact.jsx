import React, { useContext} from 'react'
import { SmoothContext } from '@/providers/SmothProvider'
import { motion, AnimatePresence } from 'framer-motion'

import ContactForm from './ContactForm'
import Footer from './Footer'
import Philosophy from './Philosophy'
import Impressum from './Impressum'
import Daten from './Daten'


const Contact = () => {
    const [smooth] = useContext(SmoothContext)
    return (
        <section 
            className="contact-container"
            style={{ background: smooth.primaryLight }}    
        >
            <div className="contact-gradient" />
            <div className="contact-mask"
                style={{
                    background: `linear-gradient(to top, rgba(255,255,255,0), rgba(255,255,255,.25), rgba(255,255,255,.5), rgba(255,255,255,.75), ${smooth.secondaryLight}, ${smooth.primaryLight}) no-repeat`
                }}
            />
            <motion.div 
                className="contact-text"
                style={{ color: smooth.primaryDark }}
            >
                <h1>About</h1>
                <p>Welcome to Smoothism, a full-service creative agency led by Bernard Bolter, an artist, designer, and developer with a passion for delivering exceptional results. With a focus on creating smooth, meaningful, and memorable experiences, Bernard specializes in developing innovative marketing campaigns and cutting-edge web apps.</p>
                <p>At Smoothism, we believe that the key to success is to make the user experience as smooth as possible. Whether you need help with UX/UI design, WordPress development, or React projects, we're here to help you bring your vision to life.</p>
                <p>We'd love to hear from you! If you're looking to take your project to the next level, please don't hesitate to contact us. We're always excited to explore new opportunities and help you achieve your goals.</p>
            </motion.div>
            <motion.div className="contact-form">
                <ContactForm />
            </motion.div>
            <Impressum />
            <Daten />
            <Footer />
        </section>
    )
}

export default Contact