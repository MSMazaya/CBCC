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
                    <a className="tgl">20 Februari</a>
                    <a className="live">Live IG</a>
                    <a className="title">“Break Your Limit ”</a>
                </div>
                </div>
                <div className="circle tl">
                <div className="text">
                    <a className="tgl2">20 Maret</a>
                    <a className="live2">Live IG</a>
                    <a className="title2">“Outstanding Students 101”</a>
                </div>
                </div>
            </motion.div>
            :
            <motion.div
            exit={{y:10,opacity:0}}
            className="timeline-container flex-row">
                <div className="circle tl">
                <div className="text">
                <a className="tgl3">1 Maret</a>
                <a className="title3">Open Registration </a>
                </div>
                </div>
                <div className="circle tl">
                <div className="text">
                <a className="tgl4">27 Maret</a>
                <a className="title4">Workshop</a>
                </div>
                </div>                
                <div className="circle tl">
                <div className="text">
                <a className="tgl3">1 April </a>
                <a className="title3">Case Contributor</a>
                </div>
                </div>                
                <div className="circle tl">
                <div className="text">
                <a className="tgl5">7 April </a>
                <a className="title5">Close Regisration</a>
                </div>
                </div>                
                <div className="circle tl">
                <div className="text">
                <a className="tgl3">6-13 April</a>
                <a className="title7">Individual Preliminary Challenge</a>
                </div>
                </div>               
                <div className="circle tl">
                <div className="text">
                <a className="tgl6">24 April</a>
                <a className="title6"> “How to Make a Proper Pitch Deck”</a>
                </div>
                </div>
                <div className="circle tl">
                <div className="text">
                <a className="tgl7">1 Mei</a>
                <a className="title7">Semifinal pitch deck presentation</a>
                </div>
                </div>
                <div className="circle tl">
                <div className="text">
                <a className="tgl6">2 Mei</a>
                <a className="title6">Final pitch deck presentation & Awarding night</a>
                </div>
                </div>
            </motion.div>
            }
                </AnimatePresence>
                
                
            </div>
        </div>
    )
}


export default Timeline

