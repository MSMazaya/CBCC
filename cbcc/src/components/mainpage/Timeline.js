import React from 'react'

const Timeline = () => {
    return (
        <div className="timeline">
            <h1 className="sub-title">Timeline</h1>
            <div className="picker flex-row">
                <a>Something</a>
                <a>Something</a>
            </div>
            <div className="gap"></div>
            <div className='flex-col'>
                <div className="line"></div>
                <div className="timeline-container flex-row">   
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </div>
        </div>
    )
}

export default Timeline

