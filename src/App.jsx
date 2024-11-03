import { useState } from 'react'
import './styles/App.css'
import Portada from './component/Portada.jsx'
import Carta from './component/Carta.jsx'
import Catering from './component/Catering.jsx'
import Contacto from './component/Contacto.jsx'
import Reserva from './component/Reserva.jsx'
import Footer from './component/Footer.jsx'
import Header from './component/Header.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Portada/>
      <Carta/>
      <Catering/>
      <Contacto/>
      <Reserva/>
      <Footer/>
    
    </>
  )
}

export default App
