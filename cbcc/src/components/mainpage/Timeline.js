import React, {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const Timeline = () => {
    const [timelineTypes, setTimelineTypes] = useState(true)
    return (
        <div className="timeline">
            <h1 className="sub-title">Timeline</h1>
            <div className="judul">
                <a whileHover={()=>{}} className={timelineTypes ? "picked" : ""} onClick={()=>setTimelineTypes(true)}>Pre-Event</a>
                <a className={timelineTypes ? "" : "picked"} onClick={()=>setTimelineTypes(false)}>Business Case Competition</a>
            </div>
            <div className="gap"></div>
            <div className='flex-col'>
                <AnimatePresence>
                <div className="line"></div>
                {timelineTypes ? 
                <motion.div 
                intial={{y:0,opacity:1}}
                exit={{y:10,opacity:0}}
                className="timeline-container flex-row"> 
                <div className="circle tl">
                    <div className="text">
                    <a className="tgl">5 Februari</a>
                    <a className="live">Live IG</a>
                    <a className="title">“Introduction of Collegacy Bandung and CBCC”</a>
                    </div>
                </div>
                <div className="circle tl">
                <div className="text">
                    <a className="tgl2">20 Februari</a>
                    <a className="live2">Live IG</a>
                    <a className="title2">“Break Your Limit ”</a>
                </div>
                </div>
                <div className="circle tl">
                <div className="text">
                    <a className="tgl3">20 Maret</a>
                    <a className="live3">Live IG</a>
                    <a className="title3">“Outstanding Students 101”</a>
                </div>
                </div>
            </motion.div>
            :
            <motion.div
            exit={{y:10,opacity:0}}
            className="timeline-container flex-row">
                <div className="circle tl"></div>
                <div className="circle tl"></div>
                <div className="circle tl"></div>
                <div className="circle tl"></div>
                <div className="circle tl"></div>
                <div className="circle tl"></div>
                <div className="circle tl"></div>
            </motion.div>
            }
                </AnimatePresence>
                
                
            </div>
        </div>
    )
}


export default Timeline

