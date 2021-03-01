import Link from 'next/link';
import React, {useState,useEffect} from 'react'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import ActiveLink from './ActiveLink';

export default function Nav(){
    const [ isOpen, setOpener ] = useState<boolean>(false);
    const onClickHandler = (event: React.MouseEvent<HTMLAnchorElement | HTMLDivElement, MouseEvent>) => {
        event.preventDefault()
        setOpener(!isOpen)
    }


    useEffect(() => {
        if(isOpen) disableBodyScroll(document.body)
        else enableBodyScroll(document.body)
        return () => {
            clearAllBodyScrollLocks()
        }
    }, [isOpen])

    return (
        <div className="header">
            <div className="container">
            <div className="nav">
                <div className="logo">
                    <Link href="/" >
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        width="216px" height="144px" viewBox="0 0 216 144" enableBackground="new 0 0 216 144" xmlSpace="preserve">
                            <path d="M174.35,18.667l-18.31,70.126l-2.72,10.079l-3.758,13.924c-0.668-3.36-1.237-7.121-1.611-11.662
                                c-0.831-10.002-2.396-16.739-4.701-20.21c-2.309-3.472-7.374-6.658-15.195-9.56c15.231-3.886,22.854-12.254,22.854-25.105
                                c0-8.394-3.553-15.091-10.648-20.091c-7.1-5-16.582-7.5-28.441-7.5h-14.59h-30.78h-0.26v40.208v2.462v3.654H41.339v-3.654v-1.649
                                V18.667H10.56v106.095h30.779V76.25v-2.416h24.844v2.041v48.887h0.26h30.519h0.26V73.773h5.026c9.845,0,14.768,6.11,14.768,18.343
                                l0.154,7.929l0.158,6.293c0,7.357,1.061,13.501,3.186,18.424h29.199h4.223h23.369l28.135-106.095H174.35z M103.181,64.991h-5.958
                                V28.46h5.958c11.658,0,17.489,6.09,17.489,18.265C120.67,58.902,114.839,64.991,103.181,64.991z"/>
                        </svg>
                    </Link>
                </div>

                <div className="web-menu">
                    <ActiveLink activeClassName='active' href="/">
                        <a className="nav-items">Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName='active' href="/projects" >
                        <a className="nav-items">Projects</a>
                    </ActiveLink>
                    <ActiveLink activeClassName='active' href="/about">
                        <a className="nav-items" >About</a>
                    </ActiveLink>
                    <ActiveLink activeClassName='active' href="/contact">
                        <a className="nav-items" >Contact</a>
                    </ActiveLink>
                </div>

                <div className="burger " onClick={onClickHandler}>
                    <span className= {`line ${isOpen ? " open": ""}`} ></span>
                </div>

                <div className={`mobile-menu-container ${isOpen ? " open": ""}`} >
                    <div className="menu">
                        <div className="nav-items" onClick={onClickHandler}>
                            <Link href="/home">Home</Link>
                        </div>
                        <div className="nav-items" onClick={onClickHandler}>
                            <Link href="/projects">Projects</Link>
                        </div>
                        <div className="nav-items" onClick={onClickHandler}>
                            <Link href="/about" >About</Link>
                        </div>
                        <div className="nav-items" onClick={onClickHandler}>
                            <Link href="/contact" >Contact</Link>
                        </div>
                    </div>                   
                </div>
            </div>
            </div>
        </div>

       
    )
}