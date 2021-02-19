import React from 'react'
import {useState} from 'react'
import {motion} from 'framer-motion'

const Navbar = ({scroll}) => {
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
        <div>
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
                        <li><a onClick={()=>{scroll()}}>Event</a></li>
                        <li classname="register"><a href="">Register Now</a></li>
                    </ul>
                </div>
            </motion.nav>
            
        </div>
    )
}

export default Navbar
