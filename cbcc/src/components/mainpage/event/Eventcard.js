import React from 'react'
import {useState,useEffect} from 'react'
import {motion,useAnimation} from 'framer-motion'
import { useInView } from "react-intersection-observer";
import { Link } from 'react-router-dom'

const eventVariants = {
    visible: {y:0,opacity:1},
    hidden: {y:30,opacity:0},
}
const insideVariant = {
    visible: {opacity:1},
    hidden: {opacity:0},
}
const cardVariant = {
    visible: {opacity:0.5},
    hidden: {opacity:1},
}
const buttonVariant = {
    visible: {backgroundColor:'white',color:'#4A415F'},
    hidden: {backgroundColor:'transparent',color:'white'},
}

const Eventcard = ({x,nama,link}) => {
    const controls = useAnimation();
    const controlinside = useAnimation();
    const controlbutton = useAnimation();
    const [ref, inView] = useInView();
    useEffect(()=>{
        if(inView){
            controls.start('visible')
        }
    }, [controls,inView])

    return (
        <div>
            <motion.div           
                        ref={ref}
                        initial='hidden'
                        animate={controls}
                        transition={{duration:0.5, delay:x/3}}
                        variants={eventVariants}
                        onMouseOver={() => controlinside.start('visible')}
                        onMouseLeave={() => controlinside.start('hidden')}
                    className="card-event">
                        <motion.div
                        initial='hidden'
                        animate={controlinside}
                        transition={{duration:0.25}}
                        variants={cardVariant}
                        className="card-inside">
                            <img src="contoh.jpg" alt="contoh"/>
                        </motion.div>
                        <motion.div 
                        initial='hidden'
                        animate={controlinside}
                        transition={{duration:0.25}}
                        variants={insideVariant}
                        className="inside">
                            <h1>{nama}</h1>
                            <motion.div
                            onMouseOver={() => controlbutton.start('visible')}
                            onMouseLeave={() => controlbutton.start('hidden')}
                            variants={buttonVariant}
                            initial='hidden'
                            animate={controlbutton}
                            className='link'>
                                <Link className="textlink" to={link}>Learn More</Link>
                            </motion.div>                            
                        </motion.div>
                    </motion.div>
        </div>
    )
}

export default Eventcard
