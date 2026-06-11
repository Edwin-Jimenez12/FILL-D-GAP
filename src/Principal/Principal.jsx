import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MENU from '../Componentes/Menu.jsx'
import BANNER from '../Principal/Componentes/Banner-principal.jsx'
import TUFUTURO from '../Principal/Componentes/El-futuro-es-tuyo.jsx'
import BANNERFIN from '../Componentes/banner-fin.jsx'
import PAGENosotros from '../Nosotros/Nosotros.jsx'
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route
      path='/'
      element={
        <section className="bg-[#EDEDED] min-h-screen">
        <MENU />
        <BANNER />
        <TUFUTURO/>
        <BANNERFIN/>
      </section>
      }
      /> 
      <Route path="/Nosotros" element={<PAGENosotros />} />
    </Routes>
    </BrowserRouter>

  )
}

export default App

