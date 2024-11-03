import React from "react";
import '../styles/Reserva.css';

const Reserva = () => {
    return (
        <div className="Reserva">
            <h2 className="Reserva-h2">Reserva tu mesa</h2>
            <form className="Reserva-form" id="reserva">
                <div className="Reserva-formGroup">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" required />
                </div>

                <div className="Reserva-formGroup">
                    <label htmlFor="personas">Número de Personas</label>
                    <input type="number" id="personas" name="personas" min="1" max="20" required />
                </div>

                <div className="Reserva-formGroup">
                    <label htmlFor="fecha">Fecha</label>
                    <input type="date" id="fecha" name="fecha" required />
                </div>

                <div className="Reserva-formGroup">
                    <label htmlFor="hora">Hora</label>
                    <input type="time" id="hora" name="hora" required />
                </div>

                <div className="Reserva-formGroup">
                    <label htmlFor="comentarios">Comentarios</label>
                    <textarea id="comentarios" name="comentarios" rows="3" placeholder="Comentarios adicionales (opcional)"></textarea>
                </div>

                <button type="submit" className="Reserva-button">Reservar</button>
            </form>
        </div>
    );
};

export default Reserva;
