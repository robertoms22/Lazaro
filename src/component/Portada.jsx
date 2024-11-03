import React from "react"
import '../styles/Portada.css'

const Portada = () => {
    return (
        <>
            <div className="Portada">
                <video
                    src="/assets/portada.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="Portada-video"
                ></video>
                <div className="Portada-logo">
                    <img src="/assets/logo.svg" alt="" className="Portada-logoImg"/>
                </div>
                
            </div>
        </>
    )
}

export default Portada