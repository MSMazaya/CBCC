import React from 'react'
import Header from './preevent/Header.js'
import {motion} from 'framer-motion'
import Subheader from './preevent/Subheader.js'
import Faq from './preevent/Faq.js'
import Timeline from './preevent/Timeline.js'
const Preevent = () => {
    return (
        <motion.div
        exit={{opacity:0,y:1000}}
        transition={{duration:1}}
        >
            <Header/>
            <Subheader/>
            <Timeline/>
            <Faq/>
        </motion.div>
    )
}

export default Preevent
