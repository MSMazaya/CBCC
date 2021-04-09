import React from 'react'

const Subheader = ({nama,posisi,judul,deskripsi,gambar}) => {
    return (
        <div className="speaker-preevent" style={{paddingTop:"30px"}}>
            <div className="speaker-card">
                    <div className="speaker circle">
                        <img src={gambar} alt="speaker"/>
                    </div>
                    <h1 className="sub-title speaker-name">{nama}</h1>
                    <p>{posisi}</p>
                </div>
            <article className="flex-col">
                <h1 style={{width:"540px", textAlign: "justify"}}>{judul}</h1>
                <p style={{width:"500px", textAlign: "justify"}}>{deskripsi}</p>
            </article>
        </div>
    )
}

export default Subheader
