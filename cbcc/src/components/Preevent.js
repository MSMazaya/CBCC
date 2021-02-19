import React from 'react'
import Header from './preevent/Header.js'
import {motion} from 'framer-motion'
const Preevent = () => {
    return (
        <motion.div
        exit={{opacity:0,y:1000}}
        transition={{duration:1}}
        >
            <Header/>
        </motion.div>
    )
}

export default Preevent
