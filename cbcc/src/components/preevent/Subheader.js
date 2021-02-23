import React from 'react'

const Subheader = ({nama,posisi,judul,deskripsi}) => {
    return (
        <div className="speaker-preevent">
            <div className="speaker-card">
                    <div className="speaker circle"></div>
                    <h1 className="sub-title speaker-name">{nama}</h1>
                    <p>{posisi}</p>
                </div>
            <article className="flex-col">
                <h1>{judul}</h1>
                <p>{deskripsi}</p>
            </article>
        </div>
    )
}

export default Subheader
