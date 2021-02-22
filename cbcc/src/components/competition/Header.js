import React from 'react'

const Header = () => {
    return (
        <div
        style={{backgroundImage: `url("competition-bg.png")`, backgroundSize: '100%'}}
        className="competition-header">
            <div className="title-button-wrapper flex-col">
                <h1>Business Case <br/> Competition</h1>
                <div className="flex-row btn-wrapper">
                    <div className="btn">
                        <h2>Guidelines</h2>
                    </div>
                    <div className="btn">
                        <h2>Register</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
