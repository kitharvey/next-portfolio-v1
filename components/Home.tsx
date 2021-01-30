import Link from 'next/link'
import React from 'react'
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Home(){
    const x = useMotionValue(200);
    const y = useMotionValue(200);
  
    const tranlateX = useTransform(x, value => (value * .02) + 70)
    const tranlateY = useTransform(y, value => value * .02)
    const tranlateXBlob = useTransform(x, value => (value * -.02) + 200)
    const tranlateYBlob = useTransform(y, value => (value * -.02) + 300)
  
    const areaRef = React.useRef<HTMLDivElement>(null);

    function handleMouse(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if(areaRef.current) {
            const rect = areaRef.current.getBoundingClientRect();
            x.set(event.clientX - rect.left);
            y.set(event.clientY - rect.top);
        }
      }

    return (
        <motion.div 
            className="home-container"
            ref={areaRef}
            onMouseMove={handleMouse}
        >
            <div id="home">
                <div className="main-text">
                    <h1 className="name">I'm Kit Harvey.</h1>
                    <p className="des">I'm a self-taught front-end developer. <br/>I help clients and companies build their web user interfaces using React, TypeScript and Sass.</p>
                </div>
                <div className="main-buttons-container">
                    <div className="main-buttons">
                        <a href="/CV_Caubalejo_Kit_Harvey.pdf" target="__blank">View Resume</a> 
                    </div>
                    <div className="main-buttons">
                        <Link href="/#contact">Hire Me</Link>
                    </div>
                </div>
            </div>
            <motion.div
                className="avatar-container"
                style={{
                    x: tranlateXBlob,
                    y: tranlateYBlob
                }}
            >
                <img src="./blob.png" alt="avatar" />

            </motion.div>
            <motion.div
                className="avatar-container"
                style={{
                    x: tranlateX,
                    y: tranlateY
                }}
            >
                <img src="./avatarnew.png" alt="avatar" />

            </motion.div>
        </motion.div>
    )
}