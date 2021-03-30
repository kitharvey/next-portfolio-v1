import React, { useRef } from 'react'
import Home from './Home'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'

export default function Portfolio() {

    const scrollRef = useRef<HTMLDivElement >(null)

    return (
        <>
        <div className="scroll-it" ref={scrollRef} > 
            <Home/>
            <Projects/>
            <About/>
            <Contact />
        </div>
        </>
    )
    
}
