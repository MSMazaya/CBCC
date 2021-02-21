import React from 'react'

const Speaker = () => {
    return (
        <div className="Speaker flex-col">
            <h1>Meet <br/> The Speakers </h1>
            <div className="flex-row speaker-container">
                <div className="speaker-card">
                    <div className="speaker circle"></div>
                    <h1 className="sub-title speaker-name">Nonono</h1>
                    <p>Body Body Body Body Body Body Body Body Body Body Body Body</p>
                </div>
                <div className="speaker-card">
                    <div className="speaker circle"></div>
                    <h1 className="sub-title speaker-name">Nanana</h1>
                    <p>Body Body Body Body Body Body Body Body Body Body Body Body</p>
                </div>
            </div>
        </div>
    )
}

export default Speaker
