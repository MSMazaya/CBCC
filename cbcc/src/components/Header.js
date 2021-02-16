import React from 'react'
import {useState} from 'react'
import {motion} from 'framer-motion'
const Header = () => {
    const [Navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 12){
            setNavbar(true)
        }
        else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll',changeBackground)

    return (
        <header>
            <motion.nav className={Navbar ? "active" : "" }
                initial={{
                    y:-1000,
                }}
                animate={{
                    y:0
                }}
                transition={{
                    delay:.4,    
                    type:'spring',
                    damping:14,
                }}
            >
                <img src="logo.png" alt="logo"/>  
                <div className="navbar">
                    <ul className="nav-items">
                        <li><a href="">Home</a></li>
                        <li><a href="">Event</a></li>
                        <li classname="register"><a href="">Register Now</a></li>
                    </ul>
                </div>
            </motion.nav>
            <motion.div
            initial={{
                opacity:0,
                y:20
            }}
            animate={{
                opacity:1,
                y:0
            }}
            transition={{
                delay:1,
                duration:1    
            }}
            className="hero">
                <img src="hero.png" alt="hero"/>
                <div className="headline">
                    <ul className="headline-items">
                        <li><a className="tentang" href="">About Us</a></li>
                        <li><a className="daftar" href="">Register</a></li>
                </ul>
                </div>
            </motion.div>
        </header>
        
    )
}



export default Header
