import React from 'react'

const Timeline = () => {
    return (
        <div className="preevent-timeline flex-col">
            <h1 className="sub-title">Timeline</h1>
            <div className='flex-row pointer-wrapper'>
                <div className="pointer"></div>
                <div className="pointer"></div>
                <div className="pointer"></div>
                <div className="pointer"></div>
            </div>
            <div className="flex-row"
                style={{
                    gap:"30px",
                    marginTop:"100px"
                }}
            >
                <div className="btn">
                    <h2>Download <br/>Guidelines</h2>
                </div>
                <div className="btn">
                    <h2>Register</h2>
                </div>
            </div>
        </div>
    )
}


export default Timeline

