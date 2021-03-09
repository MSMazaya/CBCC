import React from 'react'
import {useState,useEffect} from 'react'
import {motion,useAnimation} from 'framer-motion'
import { useInView } from "react-intersection-observer";
import Eventcard from './event/Eventcard'
const eventVariants = {
    visible: {y:0,opacity:1},
    hidden: {y:30,opacity:0},
}

const events = [
    {x:1,nama:"Pre-Event",link:"/preevent",picture:'pre.png'},
    {x:2,nama:"Competitions",link:"/competition",picture:'pre.png'},
]

const Events = ({myref}) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(()=>{
        if(inView){
            controls.start('visible')
        }
    }, [controls,inView])

    

    return (
        <div className="events">
            <motion.h1
            ref={ref}
            initial='hidden'
            animate={controls}
            transtion={{duration:2}}
            variants={eventVariants}
            className="sub-title"
            >Events</motion.h1>
            <motion.div 
            ref={ref}
            initial='hidden'
            animate={controls}
            transtion={{duration:2}}
            variants={eventVariants}
            className="grid-container">
                { events.map(({x,nama,link,picture}) => {
                    return <Eventcard x={x} nama={nama} link={link} picture={picture}/>
                })}
            </motion.div>
        </div>
    )
}

export default Events
