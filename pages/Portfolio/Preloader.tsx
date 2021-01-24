import React, {useState, useEffect} from 'react'

export default function Preloader() {
    const [ isSpinner, setSpinner ] = useState(true);

    useEffect(() => {
        setTimeout(() => setSpinner(false), 1000)
      }, []);


    return(
        <div className={`preloader-container ${isSpinner ? "": "close"}`}>
                <div className="preloader"></div>
        </div>
    )
}