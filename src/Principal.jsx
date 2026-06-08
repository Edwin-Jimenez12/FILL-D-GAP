import MENU from './Componentes/Menu.jsx'
import BANNER from './Componentes/Bann-principal.jsx'
import COMOFUNCIONA from './Componentes/Como-funciona.jsx'
function App() {

  return (
    <>
      <section className="bg-[#EDEDED] min-h-screen">
        <MENU />
        <BANNER />
        <COMOFUNCIONA/>
      </section>
    </>
  )
}

export default App
