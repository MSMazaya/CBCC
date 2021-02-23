import React from 'react'
import Header from './preevent/Header.js'
import {motion} from 'framer-motion'
import Subheader from './preevent/Subheader.js'
import Faq from './preevent/Faq.js'
import Timeline from './preevent/Timeline.js'
import Speaker from './preevent/Speaker.js'
const Preevent = () => {
    return (
        <motion.div
        exit={{opacity:0}}
        transition={{duration:0.5}}
        >
            <Header/>
            <Timeline/>
            <div className="gap-preevent2"></div>
            <Faq/>
            <div className="gap-preevent2"></div>
        </motion.div>
    )
}

export default Preevent
