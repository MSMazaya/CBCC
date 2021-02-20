import React from 'react'
import Header from "./mainpage/Header"
import Events from "./mainpage/Events"
import Timeline from "./mainpage/Timeline"
import Subheader from './mainpage/Subheader'
import Faq from "./mainpage/Faq"
import Sponsor from "./mainpage/Sponsor"
import Mediapartner from './mainpage/Mediapartner'
import {motion} from 'framer-motion'
const Mainpage = () => {
    return (
        <motion.div
        exit={{opacity:0,y:1000}}
        transition={{duration:1}}
        >
            <Header/>
            <Subheader/>
            <Events/>
            <Timeline/>
            <Faq/>
            <Sponsor/>
            <Mediapartner/>
        </motion.div>   
    )
}

export default Mainpage
