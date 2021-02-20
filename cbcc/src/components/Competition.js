import React from 'react'
import Header from './competition/Header'
import {motion} from 'framer-motion'
const Competition = () => {
    return (
        <motion.div
        exit={{opacity:0,y:1000}}
        transition={{duration:1}}>
            <Header/>
        </motion.div>
    )
}

export default Competition
