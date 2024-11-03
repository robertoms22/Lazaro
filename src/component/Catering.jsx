import React from "react"
import '../styles/Catering.css'

const Catering = () => {
    return(
        <>
            <div className="Catering" id="catering">
                <div className="Catering-h2">
                    <h2>Disfruta de Nuestro Catering</h2>
                </div>
                <div className="Catering-div">
                    <div className="Catering-grid">
                        <div className="Catering-gridImg img1"></div>
                        <div className="Catering-gridText">
                            <p className="Catering-gridTextP">Catering</p>
                            <p className="Catering-gridTextP">Para 10 personas</p>
                        </div>
                    </div>

                    <div className="Catering-grid">
                        <div className="Catering-gridImg img2"></div>
                        <div className="Catering-gridText">
                            <p className="Catering-gridTextP">Catering</p>
                            <p className="Catering-gridTextP">Para 25 personas</p>
                        </div>
                    </div>

                    <div className="Catering-grid">
                        <div className="Catering-gridImg img3"></div>
                        <div className="Catering-gridText">
                            <p className="Catering-gridTextP">Catering</p>
                            <p className="Catering-gridTextP">Para 50 personas</p>
                        </div>
                    </div>

                    <div className="Catering-grid">
                        <div className="Catering-gridImg img4"></div>
                        <div className="Catering-gridText">
                            <p className="Catering-gridTextP">Catering</p>
                            <p className="Catering-gridTextP">Para 100 personas</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Catering
