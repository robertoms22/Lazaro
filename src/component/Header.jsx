import { useState } from 'react'
import '../styles/Header.css'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    };

    const closeMenu = () => {
        setIsMenuOpen(false)
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
            closeMenu()
        }
    };

    return (
        <>
            <div className="Header">
                <div className="Header-icon" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list icon" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </div>

                <div className={`Header-menu Menu-overlay ${isMenuOpen ? 'open' : 'close'}`}>
                    <nav className="Menu-nav" onClick={(e) => e.stopPropagation()}>
                        <ul className="Menu-ul">
                            <li className="Menu-li" onClick={() => scrollToSection('carta')}>CARTA</li>
                            <li className="Menu-li" onClick={() => scrollToSection('catering')}>CATERING</li>
                            <li className="Menu-li" onClick={() => scrollToSection('contacto')}>CONTACTO</li>
                            <li className="Menu-li" onClick={() => scrollToSection('reserva')}>RESERVA</li>
                            <li className="Menu-li Close-icon" onClick={closeMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                                </svg>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header
