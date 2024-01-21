import React, { useState, useEffect, useContext } from 'react'
import { SmoothContext } from '@/providers/SmothProvider'
import { motion } from 'framer-motion'
import * as Scroll from 'react-scroll'

const Footer = () => {
    const [smooth, setSmooth] = useContext(SmoothContext)
    const [scrollTop, setScrollTop] = useState(0)
    var scroll = Scroll.animateScroll;

    useEffect(() => {
        const onScroll = e => {
            setScrollTop(e.target.documentElement.scrollTop)
            if (e.target.documentElement.scrollTop !== scrollTop) {
                setSmooth(state => ({ ...state, viewDaten: false, viewImpressum: false, viewFooterItems: true }))
            }
        };
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    return (
        <motion.footer
            className="footer-container"
            style={{ color: smooth.primaryDark }}
        >
            <p
                onClick={() => {
                    scroll.scrollTo(0)
                    setSmooth(state => ({ ...state, footerModal: 'none'}))
                }}
            >
                smoothism.com 
                <span className="copy">&copy;</span>
                <span>{new Date().getFullYear()}</span>
            </p>
            <p
                onClick={() => {
                    setSmooth(state => 
                        ({ ...state, 
                            viewImpressum: !state.viewImpressum,
                            viewDaten: false,
                        }))
                }}
            >Impressum</p>
            <p
                onClick={() => {
                    setSmooth(state => 
                        ({ ...state, 
                            viewDaten: !state.viewDaten,
                            viewImpressum: false, 
                        }))
                }}
            >Datenschutzerklärung</p>
        </motion.footer>
    )
}

export default Footer