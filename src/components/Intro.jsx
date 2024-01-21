"use client"

import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { useWindowSize } from '@/helpers/useWindowSize'
import { SmoothContext } from '@/providers/SmothProvider'
import * as Scroll from 'react-scroll'

import Logo from '@/svg/logo'
import Insta from '@/svg/insta'
import Github from '@/svg/github'
import Arrow from '@/svg/arrow'

const Intro = () => {
    const [smooth] = useContext(SmoothContext)
    const size = useWindowSize()
    var scroll = Scroll.animateScroll;

    return (
        <section 
            className="intro-container"
            style={{ 
                color: smooth.primaryDark,
                height: smooth.introHeight,
                // background: `linear-gradient(to top, ${smooth.primaryLight},${smooth.secondaryLight})`
            }}    
        >
            <div className="intro-mask" 
                style={{
                    background: `linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,.25), rgba(255,255,255,.5), rgba(255,255,255,.75), ${smooth.secondaryLight}, ${smooth.primaryLight})`
                }}
            />
            <motion.div 
                className="logo"
                initial={{ translateX: -200 }}
                animate={{ translateX: 0 }}
                transition={{ duration: 1, ease: "easeIn"}}
            >
                <Logo style={{ fill: smooth.primaryDark }}/>
            </motion.div>
            <motion.div className="bernard">
                <motion.h1
                    initial={{ translateX: 200 }}
                    animate={{ translateX: 0 }}
                    transition={{ duration: 0.5, ease: 'easeIn' }}
                >Creative Solutions</motion.h1>
                <motion.h2
                    initial={{ translateX: 200 }}
                    animate={{ translateX: 0 }}
                    transition={{ duration: 0.5, ease: 'easeIn', delay: 0.2 }}
                ><span>from</span> Bernard Bolter</motion.h2>
                <motion.h3
                    initial={{ translateX: 200 }}
                    animate={{ translateX: 0 }}
                    transition={{ duration: 0.5, ease: 'easeIn', delay: 0.4 }}
                >b. 1974 <span>(San Francisco)</span></motion.h3>
                <motion.h3
                    initial={{ translateX: 200 }}
                    animate={{ translateX: 0 }}
                    transition={{ duration: 0.5, ease: 'easeIn', delay: 0.6 }}
                >lives and codes in Berlin</motion.h3>
            </motion.div>
            <motion.div
                className="box"
            >
                {
                    [1,2,3,4].map(i => (
                        <svg
                            viewBox="0 0 426 244" 
                            key={i}
                            style={{ width: `${i * 22}%`}}    
                        >
                            <motion.path 
                                d="M0 243.5V0.5H425.5V172.5L313.5 243.5H0Z" 
                                initial={{ fill: smooth.primaryDark, opacity: 0 }}
                                animate={{ opacity: `0.0${i * 2}`  }}
                                transition={{ duration: 2.0, ease: "linear", delay: `${i}` }}
                                // style={{ transform:  `scale(0.${i * 2})` }}
                            />
                        </svg>
                    ))
                }
            </motion.div>
            <motion.div className="into-links">
                <motion.a 
                    className="insta"
                    href="https://www.instagram.com/bernardbolter/"
                    initial={{ translateX: 200 }}
                    animate={{ translateX: 0 }}
                    transition={{ duration: 0.5, ease: 'easeIn', delay: 0.8 }}    
                >
                    <Insta />
                    <h4 style={{ color: smooth.primaryDark }}>@bernardbolter</h4>
                </motion.a>
                <motion.a
                    className="github"
                    href="https://github.com/bernardbolter"
                    initial={{ translateX: 200 }}
                    animate={{ translateX: 0 }}
                    transition={{ duration: 0.5, ease: 'easeIn', delay: 1 }}
                >
                    <Github 
                        style={{ fill: smooth.primaryDark}}
                    />
                    <h4 style={{ color: smooth.primaryDark }}>@bernardbolter</h4>
                </motion.a>
                <motion.div
                    className="intro-contact"
                    initial={{ translateX: 200 }}
                    animate={{ translateX: 0 }}
                    transition={{ duration: 0.5, ease: 'easeIn', delay: 1.2 }}
                    onClick={() => scroll.scrollTo(size.height * .8 + (size.height * smooth.projects.length))}
                >
                    <div 
                        className="intro-arrow"
                        style={{ fill: smooth.primaryDark, color: smooth.primaryDark }}    
                    >
                        <Arrow />
                    </div>
                    <p>contact</p>
                </motion.div>
            </motion.div>
            <motion.div className="lead">
                <h1>A Smooth</h1>
                <h1>Operation.</h1>
            </motion.div>
            <motion.div className="pitch">
                <h2>from Contemporary Art Concepts</h2>
                <h2 className="pitch-padding">to Functional React Components</h2>
                <h3>(but also Modern Art Concepts,</h3>
                <h3> and we can keep them components classy, too)</h3>
            </motion.div>
        </section>
    )
}

export default Intro