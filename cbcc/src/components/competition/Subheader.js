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
            <div className="subheader-item" style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"flex-start",
                maxWidth:"402px",
                alignSelf:"flex-start",
                position:"relative",
                left:"25%"
            }}>
                <h1 style={{fontSize:"50px", marginTop:"110px"}}>Business Case <br/> Competition</h1>
                <p>Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body </p>
            </div>
            <div className="subheader-item">
                <motion.p
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    transition={{duration:0.5}}
                    variants={leftVariants}
                >Peserta akan diminta untuk melakukan analisis dan solusi terhadap business case. Setelah tahap penilaian berakhir, panitia akan memilih 60 orang peserta dengan nilai tertinggi yang akan melanjutkan tahap selanjutnya, di tahap Collaboration Challenge </motion.p>
                <motion.h1
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    transition={{duration:0.5}}
                    variants={rightVariants}
                >Individual Preliminary Challenge</motion.h1>   
            </div>
            <div style={{marginBottom :"105px", fontSize:"15px"}}className="subheader-item">
                <motion.h1
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    transition={{duration:0.75}}
                    variants={leftVariants}
                >Collaboration Challenge</motion.h1>   
                <motion.p
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    transition={{duration:0.75}}
                    variants={rightVariants}
                >Di tahap Collaboration Challenge, 60 peserta akan terbagi ke dalam 20 tim yang terdiri dari 3 orang. Setiap tim akan diminta untuk menyelesaikan business case yang diberikan mengenai suatu permasalahan nyata.
                </motion.p>
            </div>
            <div className="cover">
                <div className="elips2 bg-decoration subheader-dekorasi2"></div>
                <div className="elips3 bg-decoration subheader-dekorasi3"></div>
            </div>
        </div>
    )
}

export default Subheader
