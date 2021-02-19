import React from 'react'
import {motion} from 'framer-motion'
const Header = () => {
    return (
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
        className="pre-event-header">
            <div className="header-part-1">
                <h1 >Pre-event</h1>
                <motion.a
                whileHover={{scale:1.1}}
                href="">Timeline</motion.a>
            </div>
            <div className="description">
                <p>Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body </p>
            </div>
            <div className="adder-preevent"></div>
        </motion.div>
    )
}

export default Header
