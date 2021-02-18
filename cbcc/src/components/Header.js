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
                        <motion.li
                            whileHover="hover"
                            variants={{
                                hover:{
                                    scale:1.1,
                                }
                            }}
                        ><a className="tentang" href="">About Us</a></motion.li>
                        <motion.li
                            whileHover="hover"
                            variants={{
                                hover:{
                                    scale:1.1
                                }
                            }}
                        ><a className="daftar" href="">Register</a></motion.li>
                </ul>
                </div>
            </motion.div>
            <div className="cover">
                <motion.div
                initial={{x:100}}
                animate={{x:0}}
                transition={{
                    type: "spring",
                    delay:2,
                    damping:5,
                }}
                className="elips1 bg-decoration dekorasi1"></motion.div>
            </div>
            <div className="cover">
                <motion.div
                initial={{x:-100}}
                animate={{x:0}}
                transition={{
                    type: "spring",
                    delay:2,
                    damping:5,
                }}
                className="poligon1 bg-decoration dekorasi2"></motion.div>
            </div>
        </header>
        
    )
}



export default Header
