import React from 'react'
import Header from './competition/Header'
import {motion} from 'framer-motion'
import Subheader from './competition/Subheader'
import Timeline from './competition/Timeline'
const Competition = () => {
    return (
        <motion.div
        exit={{opacity:0}}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}}>
            <Header/>
            <Subheader/>
            <Timeline/>
            <div className="gap-compe"></div>
        </motion.div>
    )
}

export default Competition
