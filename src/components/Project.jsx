import React, { useState, useContext, useMemo } from 'react'
import { SmoothContext } from '@/providers/SmothProvider'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useWindowSize } from '@/helpers/useWindowSize'
import * as Scroll from 'react-scroll'

import Github from '@/svg/github'
import Info from '@/svg/info'
import Plus from '@/svg/plus'
import Minus from '@/svg/minus'

const Project = ({ project, index }) => {
    const [smooth, setSmooth] = useContext(SmoothContext)
    const [viewWebsite, setViewWebsite] = useState(false)
    const [viewInfo, setViewInfo] = useState(false)
    const [even] = useState(index % 2 === 0 ? true : false)
    const size = useWindowSize()
    const { scrollY } = useScroll()
    var scroll = Scroll.animateScroll;
    const movingWidth = useTransform(scrollY, [index * size.height, smooth.introHeight + (size.height * index)], [size.width - 44 - smooth.projectBorder - smooth.projectBorder, smooth.projectBorder])
    const bottomHeight = useTransform(scrollY, [index * size.height, smooth.introHeight + (size.height * index)], [size.height - 44 - smooth.projectBorder - smooth.projectBorder, smooth.projectBorder])
    const projectLinkVisible = useTransform(scrollY, [(index * size.height) + (smooth.introHeight * .1), (index * size.height) + (smooth.introHeight * .5)], [1, 0])
    const headerVisible = useTransform(scrollY, [(index * size.height) + (smooth.introHeight * .5), (index * size.height) + (smooth.introHeight * .9)], [0, 1])

    const projectScreenShot = useMemo(() => {
        if (size.width < 350) {
            return `https://digitalcityseries.com/smoothism/${project.slug}/${project.slug}_1.jpg`
        } else if (size.width < 400) {
            return `https://digitalcityseries.com/smoothism/${project.slug}/${project.slug}_2.jpg`
        } else if (size.width < 450) {
            return `https://digitalcityseries.com/smoothism/${project.slug}/${project.slug}_3.jpg`
        } else if (size.width < 500) {
            return `https://digitalcityseries.com/smoothism/${project.slug}/${project.slug}_4.jpg`
        } else if (size.width < 550) {
            return `https://digitalcityseries.com/smoothism/${project.slug}/${project.slug}_5.jpg`
        } else if (size.width < 600) {
            return `https://digitalcityseries.com/smoothism/${project.slug}/${project.slug}_6.jpg`
        } else if (size.width < 650) {
            return `https://digitalcityseries.com/smoothism/${project.slug}/${project.slug}_7.jpg`
        } else if (size.width < 700) {
            return `https://digitalcityseries.com/smoothism/${project.slug}/${project.slug}_8.jpg`
        } else if (size.width < 750) {
            return `https://digitalcityseries.com/smoothism/${project.slug}/${project.slug}_9.jpg`
        } else if (size.width < 800) {
            return `https://digitalcityseries.com/smoothism/${project.slug}/${project.slug}_10.jpg`
        } else if (size.width < 850) {
            return `https://digitalcityseries.com/smoothism/${project.slug}/${project.slug}_11.jpg`
        } else if (size.width < 900) {
            return `https://digitalcityseries.com/smoothism/${project.slug}/${project.slug}_12.jpg`
        } else if (size.width < 950) {
            return `https://digitalcityseries.com/smoothism/${project.slug}/${project.slug}_13.jpg`
        } else if (size.width < 1000) {
            return `https://digitalcityseries.com/smoothism/${project.slug}/${project.slug}_14.jpg`
        } else if (size.width < 1050) {
            return `https://digitalcityseries.com/smoothism/${project.slug}/${project.slug}_15.jpg`
        } else if (size.width < 1100) {
            return `https://digitalcityseries.com/smoothism/${project.slug}/${project.slug}_16.jpg`
        } else if (size.width < 1150) {
            return `https://digitalcityseries.com/smoothism/${project.slug}/${project.slug}_17.jpg`
        } else if (size.width < 1200) {
            return `https://digitalcityseries.com/smoothism/${project.slug}/${project.slug}_18.jpg`
        } else if (size.width < 1250) {
            return `https://digitalcityseries.com/smoothism/${project.slug}/${project.slug}_19.jpg`
        } else if (size.width < 1300) {
            return `https://digitalcityseries.com/smoothism/${project.slug}/${project.slug}_20.jpg`
        } else if (size.width < 1350) {
            return `https://digitalcityseries.com/smoothism/${project.slug}/${project.slug}_21.jpg`
        } else if (size.width < 1400) {
            return `https://digitalcityseries.com/smoothism/${project.slug}/${project.slug}_22.jpg`
        } else if (size.width < 1450) {
            return `https://digitalcityseries.com/smoothism/${project.slug}/${project.slug}_23.jpg`
        } else if (size.width < 1550) {
            return `https://digitalcityseries.com/smoothism/${project.slug}/${project.slug}_24.jpg`
        } else if (size.width < 1600) {
            return `https://digitalcityseries.com/smoothism/${project.slug}/${project.slug}_25.jpg`
        } else if (size.width < 1650) {
            return `https://digitalcityseries.com/smoothism/${project.slug}/${project.slug}_26.jpg`
        } else if (size.width < 1700) {
            return `https://digitalcityseries.com/smoothism/${project.slug}/${project.slug}_27.jpg`
        } else if (size.width < 1750) {
            return `https://digitalcityseries.com/smoothism/${project.slug}/${project.slug}_28.jpg`
        } else if (size.width < 1800) {
            return `https://digitalcityseries.com/smoothism/${project.slug}/${project.slug}_29.jpg`
        } else return `https://digitalcityseries.com/smoothism/${project.slug}/${project.slug}_30jpg`
    }, [size.width])

    return (
        <section className="project-container">
            <motion.div 
                className="view-projects"
                style={{
                    left: even ? smooth.projectBorder : "auto",
                    right: even ? "auto" : smooth.projectBorder,
                    top: index === 0 ? -20 : -40,
                    opacity: projectLinkVisible
                }}
                onClick={() => {
                    scroll.scrollTo(smooth.introHeight + (size.height * index))
                }} 
            >
                <p>{index === 0 ? "View" : "Next"}</p>
                <p>Project{index === 0 ? "s" : ""}</p>
            </motion.div>
            <motion.div 
                className="project-mask"
                style={{
                    width: '100%',
                    height: size.height
                }}
            >
                <motion.p
                    className="project-website"
                    style={{ 
                        left: smooth.projectBorder,
                        top: smooth.projectBorder - 20,
                        opacity: headerVisible,
                        color: smooth.primaryDark
                    }}
                >
                    {project.website}
                </motion.p>
                <motion.p
                    className="project-tagline"
                    style={{ 
                        right: size.width < 550 ? 'auto' : smooth.projectBorder,
                        top: size.width < 550 ? smooth.projectBorder : smooth.projectBorder - 20,
                        left: size.width < 550 ? smooth.projectBorder : 'auto',
                        opacity: headerVisible,
                        color: smooth.primaryDark,
                        backgroundColor: smooth.primaryLight
                    }}
                >
                    {project.tagline}
                </motion.p>
                <motion.div 
                    className="project-square left"
                    style={{
                        background: smooth.primaryLight,
                        left: 0,
                        top: 0,
                        height: "100%",
                        width: even ? smooth.projectBorder : movingWidth
                    }}
                />
                <motion.div
                    className="project-square top"
                    style={{
                        background: smooth.primaryLight,
                        left: 0,
                        top: 0,
                        width: "100%",
                        height: size.width < 550 ? 25 : smooth.projectBorder
                    }}
                />
                <motion.div
                    className="project-square right"
                    style={{
                        background: smooth.primaryLight,
                        right: 0,
                        top: 0,
                        width: even ? movingWidth : smooth.projectBorder,
                        height: "100vh"
                    }}
                />
                <motion.div
                    className="project-square bottom"
                    style={{
                        background: smooth.primaryLight,
                        left: 0,
                        bottom: 0,
                        width: "100%",
                        height: bottomHeight
                    }}
                />
                <motion.div
                    className="project-square angle"
                    style={{
                        background: smooth.primaryLight,
                        right: even ? 'auto' : smooth.projectBorder / 2,
                        left: even ? smooth.projectBorder / 2 : 'auto',
                        bottom: 0,
                        width: "110%",
                        height: size.width < 550 ? size.height * .25 : size.height * .3,
                        transform: even ? 'rotate(-10deg)' : 'rotate(10deg)',
                        transformOrigin: even ? 'right bottom' : 'left bottom' 
                    }}
                >
                    <p
                        className={even ? "made-with made-right" : "made-with -made-left"}
                        style={{ 
                            right: even ? '10%' : 'auto',
                            left: even ? 'auto' : '10%',
                            textAlign: even ? 'right' : 'left'
                        }}
                    >
                        <span>made with: </span>
                        {project.madeWith}
                    </p>
                    <a
                        className={even ? "project-github github-right" : "project-github github-left"}
                        style={{
                            right: even ? '11%' : 'auto',
                            left: even ? 'auto' : '11%',
                            top: 28
                        }}
                        href={project.github}
                    >
                        <Github 
                            style={{ fill: smooth.primaryDark}}
                        />
                        <p>github link</p>
                    </a>
                </motion.div>
                <div 
                    className="web-link"
                    onClick={() => {
                        window.open(project.link, '_blank').focus()
                    }}
                >
                    <p
                        style={{ color: smooth.primaryDark }}
                    >visit website</p>
                </div>
            </motion.div>
            <div 
                className="project-iframe"
                style={{
                    width: viewWebsite ? size.width : size.width - 15,
                    height: size.height,
                    zIndex: 9
                }}    
            >   
                <img src={projectScreenShot} alt={`screenshot from ${project.website}`} />
            </div>
            <motion.section
                initial={{ maxHeight: 30 }}
                animate={viewInfo 
                    ? { maxHeight: 600, 
                        width: size.width < 500 ? '80%' : size.width < 769 ? '65%' : size.width < 1100 ? '50%' : '35%'
                    } 
                    : { maxHeight: 30, width: 60 } 
                }
                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                className={viewInfo ? 'project-info project-info-on' : 'project-info'}
                style={{
                    top: smooth.projectBorder,
                    left: index % 2 === 0 ? smooth.projectBorder : 'auto',
                    right: index % 2 === 0 ? 'auto' : smooth.projectBorder
                }}    
            >
                <div 
                    className="project-info-icons"
                    onClick={() => setViewInfo(!viewInfo)}    
                >
                    <Info />
                    {viewInfo ? <Minus /> : <Plus />}
                </div>
                <h2>{project.description}</h2>
            </motion.section>
        </section>
    )
}

export default Project