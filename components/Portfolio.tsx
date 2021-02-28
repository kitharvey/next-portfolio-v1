import React, { useRef } from 'react'
import Nav from './Nav'
import Home from './Home'
import Projects from './Projects'
import About from './About'
// import Footer from './Footer'
import Contact from './Contact'

export default function Portfolio() {

    const scrollRef = useRef<HTMLDivElement >(null)

    // window.addEventListener('wheel', e => {
    //     console.log(e.deltaY)
    //     if(scrollRef && scrollRef.current) {
    //         if (e.deltaY > 0) scrollRef.current.scrollLeft += 500;
    //         else scrollRef.current.scrollLeft -= 500;
    //     }
    //   });

    return (
        <>
        <Nav/>
        <div className="scroll-it" ref={scrollRef} > 
            <Home/>
            <Projects/>
            <About/>
            <Contact />
            {/* <Footer /> */}
        </div>
        </>
    )
    
}
