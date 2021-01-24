import React from 'react'
import Nav from './Nav'
import Home from './Home'
import Projects from './Projects'
import About from './About'
import Footer from './Footer'

export default function Portfolio() {
    
    return (
        <div className="wrapper" > 
            <Nav></Nav>
            <Home></Home>
            <Projects></Projects>
            <About></About>
            <Footer />
        </div>
        
    )
    
}
