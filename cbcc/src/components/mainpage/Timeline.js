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
                </div>
            </div>
        </div>
    )
}


export default Timeline

