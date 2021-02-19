import React from 'react'
import {motion} from 'framer-motion'
const Header = () => {
    return (
        <div className="pre-event-header">
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
        </div>
    )
}

export default Header
