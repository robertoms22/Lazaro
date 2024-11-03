import React from "react"
import '../styles/Carta.css'

const Carta = () => {
    return (
        <>
            <div className="Carta" id="carta">
                <div className="Carta-comida">
                    <h2 className="Carta-comidaH2">Carta</h2>
                    <img src="assets/comida.webp" alt="" className="Carta-comidaImg" />
                </div>
                <div className="Carta-vinos">
                <h2 className="Carta-vinosH2">Nuestros Vinos</h2>
                    <img src="assets/vinos.webp" alt="" className="Carta-vinosImg"/>
                </div>
            </div>
        </>
    )
}

export default Carta