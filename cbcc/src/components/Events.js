import React from 'react'
import {useState,useEffect} from 'react'
import {motion,useAnimation} from 'framer-motion'
import { useInView } from "react-intersection-observer";
const eventVariants = {
    visible: {y:0,opacity:1},
    hidden: {y:30,opacity:0},
}

const Events = () => {
    const [Events, setEvents] = useState([1,2,3])
    const [visible, setVisible] = useState(false)
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
            >Events</motion.h1>
            <motion.div 
            ref={ref}
            initial='hidden'
            animate={controls}
            transtion={{duration:2}}
            variants={eventVariants}
            className="grid-container">
                { Events.map((x) => {
                    return <motion.div           
                        ref={ref}
                        initial='hidden'
                        animate={controls}
                        transition={{duration:0.5, delay:x/3}}
                        variants={eventVariants}
                        
                    className="card-event">
                        <motion.div
                        initial={{opacity:0.7}}
                        whileHover={{opacity:0.2}}
                        className="card-inside">
                            <img src="contoh.jpg" alt="contoh"/>
                        </motion.div>
                    </motion.div>
                })}
            </motion.div>
        </div>
    )
}

export default Events
