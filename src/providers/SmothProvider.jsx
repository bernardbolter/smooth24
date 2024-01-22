"use client"

import React, { useState, useEffect, createContext } from 'react'
import { randomColor, shuffle } from '../helpers'

import Projects from '../data/projects.json'

export const SmoothContext = createContext()

const SmoothProvider = ({ children }) => {
    const [smooth, setSmooth] = useState({
        primaryDark: '',
        secondaryDark: '',
        primaryLight: '',
        secondaryLight: '',
        changeColor: false,
        introHeight: 0,
        projectBorder: 0,
        projects: [],
        viewNavigation: true,
        viewImpressum: false,
        viewDaten: false,
        viewFooterItems: false
    })

    useEffect(() => {
        setSmooth(state => ({
            ...state,
            primaryDark: randomColor(20,45,1),
            secondaryDark: randomColor(20,45,1),
            primaryLight: randomColor(250,255,1),
            secondaryLight: randomColor(250,255,1)
        }))
    }, [smooth.changeColor])

    // const shuffledProjects = shuffle(Projects)

    useEffect(() => {
        setSmooth(state => ({
            ...state,
            projects: shuffle(Projects)
        }))
    }, [])
    
    return (
        <SmoothContext.Provider
            value={[smooth, setSmooth]}
        >
            {children}
        </SmoothContext.Provider>
    )
}

export default SmoothProvider