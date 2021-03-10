import React, {useState} from 'react'
import {motion} from 'framer-motion'

const Timeline = () => {
    const [timelineTypes, setTimelineTypes] = useState(true)
    return (
        <div className="preevent-timeline flex-col">
            <h1 className="sub-title">Timeline</h1>
            <div className="judul">
                <a whileHover={()=>{}} className={timelineTypes ? "picked" : ""} onClick={()=>setTimelineTypes(true)}>Individual Preliminary</a>
                <a className={timelineTypes ? "" : "picked"} onClick={()=>setTimelineTypes(false)}>Collaboration Challenge</a>
            </div>
            {timelineTypes ? 
                    <div className='flex-row pointer-wrapper'>            
                        <div className="pointer">
                        <div className="temlen">
                    <a className="tanggal2" style={{
                        left:"30px",
                    }}>1-31 March</a>
                    <a className="jdl3">Open Registration</a>
                    </div>
                            </div>
                        <div className="pointer">
                        <div className="temlen">
                    <a className="tanggal2">27 March 2021</a>
                    <a className="jdl4" style={{
                        lineHeight:"16px",
                        fontSize:"18px",
                    }}>Workshop “How to Design Your Way of Thinking” </a>
                    </div>
                            </div>
                        <div className="pointer">
                        <div className="temlen">
                    <a className="tanggal2">1 April 2021</a>
                    <a className="jdl3"> Case Distribution</a>
                    </div>
                            </div>
                        <div className="pointer">
                        <div className="temlen">
                            <a className="tanggal2" style={{
                        left:"40px",
                    }}>6-13 April</a>
                            <a className="jdl4">Essay Submission</a>
                            </div>
                        </div>
                        <div className="pointer">
                        <div className="temlen">
                            <a className="tanggal2">23 April 2021</a>
                            <a className="jdl3">60 Semifinalist Announcement</a>
                        </div>
                            </div>
                    </div>

                    
                    
            :
            <div className='flex-row pointer-wrapper'>           
                <div className="pointer">
                <div className="temlen">
                <a className="tanggal2">24 April 2021</a>
                <a className="jdl3">Workshop “How to make <br/> a proper pitchdeck”</a>
                    </div>
                </div>
                <div className="pointer"><div className="temlen">
                            <a className="tanggal2">30  April 2021</a>
                            <a className="jdl4">Essay Submission</a>
                            </div>
                        </div>
                <div className="pointer"><div className="temlen">
                <a className="tanggal2">1 Mei 2021</a>
                <a className="jdl3">Pitching day & <br/> Top 5 Anouncement</a>
                    </div>
                </div>
                <div className="pointer"><div className="temlen">
                            <a className="tanggal2">2 Mei 2021</a>
                            <a className="jdl4">Awarding Day</a>
                            </div>
                        </div>
            </div>
            }
            
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

