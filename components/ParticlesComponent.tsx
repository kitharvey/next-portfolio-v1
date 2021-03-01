import React from 'react'
import Particles from 'react-particles-js'



const ParticlesComponent = () => (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      }}
    >
        <Particles
            params={{
                "particles": {
                    "number": {
                        "value": 200,
                        "density": {
                            "enable": true
                        }
                    },
                    "size": {
                        "value": 1,
                        "random": true,
                        "anim": {
                            "speed": 4,
                            "size_min": 0.3
                        }
                    },
                    "line_linked": {
                        "enable": false,
                        "distance": 100,
                        "color": "#ffffff",
                        "opacity": 0.2,
                        "width": .25
                    },
                    "move": {
                        "random": false,
                        "speed": 1,
                        "direction": "bottom",
                        "out_mode": "out"
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "connect"
                        },
                        "onclick": {
                            "enable": false,
                            "mode": "push"
                        }
                    },
                    "modes": {
                        "bubble": {
                            "distance": 250,
                            "duration": 2,
                            "size": 0,
                            "opacity": 0
                        },
                        "repulse": {
                            "distance": 400,
                            "duration": 4
                        }
                    }
                }
            }}/>
    </div>
)

export default ParticlesComponent