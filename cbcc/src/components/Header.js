import React from 'react'
import {motion} from 'framer-motion'
const Header = () => {
    return (
        <header>
            <motion.nav
                initial={{
                    y:-1000
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
                    <h1>Sub-Headline</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia maxime debitis quod exercitationem. Dolores eum, dolorem culpa doloremque modi, id totam voluptate quae ducimus voluptatum ratione temporibus, itaque magnam a.</p>
                </div>
            </motion.div>
        </header>
        
    )
}



export default Header
