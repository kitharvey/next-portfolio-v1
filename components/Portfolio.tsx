import React from 'react'
import Nav from './Nav'
import Home from './Home'
import Projects from './Projects'
import About from './About'
import Footer from './Footer'
import Contact from './Contact'

export default function Portfolio() {
    
    return (
        <div className="wrapper" > 
            <Nav/>
            <Home/>
            <Projects/>
            <About/>
            <Contact />
            <Footer />
        </div>
        
    )
    
}
