import Link from 'next/link'
import React from 'react'

export default function Home(){

    return (
        <div className="wrapper" id="home" >
            <div className="container">
                <div 
                    id="page" 
                >
                    <div className="left">
                        <div className="main-text">
                            <h1 className="name">I'm Kit Harvey.</h1>
                            <p className="des">I'm a self-taught front-end developer. <br/>I help clients and companies build their web user interfaces using React, TypeScript and Sass.</p>
                        </div>
                        <div className="main-buttons-container">
                            <div className="main-buttons">
                                <a href="/CV_Caubalejo_Kit_Harvey.pdf" target="__blank">View Resume</a> 
                            </div>
                            <div className="main-buttons">
                                <Link href="/contact">Hire Me</Link>
                            </div>
                        </div>
                    </div>
                    {/* <div className='avatar-wrapper' >
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
                    </div> */}
                </div>
            </div>
        </div>
            
          

    )
}