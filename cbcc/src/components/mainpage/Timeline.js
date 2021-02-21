import React from 'react'

const Timeline = () => {
    return (
        <div className="timeline">
            <h1 className="sub-title">Timeline</h1>
            <div className="judul">
                <a>Pre-Event</a>
                <a>Business Case Competition</a>
            </div>
            <div className="gap"></div>
            <div className='flex-col'>
                <div className="line"></div>
                <div className="timeline-container flex-row">   
                    <div className="circle tl"></div>
                    <div className="circle tl"></div>
                    <div className="circle tl"></div>
                    <div className="circle tl"></div>
                </div>
            </div>
        </div>
    )
}


export default Timeline

