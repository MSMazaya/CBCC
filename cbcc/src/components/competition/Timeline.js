import React from 'react'
import {motion} from 'framer-motion'

const Timeline = () => {
    return (
        <div className="preevent-timeline flex-col">
            <h1 className="sub-title">Timeline</h1>
            <div className='flex-row pointer-wrapper'>            <motion.div
                            whileHover="hover"
                            variants={{
                                hover:{
                                    opacity: "0.8",
                                }
                            }}
                        >
                <div className="pointer"></div></motion.div>
                <motion.div
                            whileHover="hover"
                            variants={{
                                hover:{
                                    opacity: "0.8",
                                }
                            }}
                        >
                <div className="pointer"></div></motion.div>
                <motion.div
                            whileHover="hover"
                            variants={{
                                hover:{
                                    opacity: "0.8",
                                }
                            }}
                        >
                <div className="pointer"></div></motion.div>
                <motion.div
                            whileHover="hover"
                            variants={{
                                hover:{
                                    opacity: "0.8",
                                }
                            }}
                        >
                <div className="pointer"></div></motion.div>
            </div>
            <div className="flex-row"
                style={{
                    gap:"30px",
                    marginTop:"100px"
                }}
            >
                <motion.div
                            whileHover="hover"
                            variants={{
                                hover:{
                                    scale:1.1,
                                }
                            }}
                        >
                <div className="btn">
                    <h2 style={{
                            color: "white",
                            fontSize: "18px",
                    }}>Download <br/>Guidelines</h2>
                </div></motion.div>
                <motion.div
                            whileHover="hover"
                            variants={{
                                hover:{
                                    scale:1.1,
                                }
                            }}
                        >
                <div className="btn">
                    <h2 style={{
                            color: "white"
                }}>Register</h2>
                </div></motion.div>
            </div>
        </div>
    )
}


export default Timeline

