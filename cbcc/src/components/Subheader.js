import React from 'react'
import {useEffect} from 'react'
import {motion,useAnimation} from 'framer-motion'
import { useInView } from "react-intersection-observer";

const leftVariants = {
    visible: {x:0,opacity:1},
    hidden: {x:-10,opacity:0}
}
const rightVariants = {
    visible: {x:0,opacity:1},
    hidden: {x:10,opacity:0}
}
const Subheader = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(()=>{
        if(inView){
            controls.start('visible')
        }
    }, [controls,inView])

    return (
        <div className="subheader">
            <div className="subheader-item">
                <motion.p
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    transition={{duration:0.5}}
                    variants={leftVariants}
                >Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body</motion.p>
                <motion.h1
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    transition={{duration:0.5}}
                    variants={rightVariants}
                >Collegacy Business Case Competition</motion.h1>   
            </div>
            <div className="subheader-item2">
                <motion.h1
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    transition={{duration:0.75}}
                    variants={leftVariants}
                >Our Goal</motion.h1>   
                <motion.p
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    transition={{duration:0.75}}
                    variants={rightVariants}
                >Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body</motion.p>
            </div>
            <div className="cover">
                <div className="elips2 bg-decoration subheader-dekorasi2"></div>
            </div>
        </div>
    )
}

export default Subheader
