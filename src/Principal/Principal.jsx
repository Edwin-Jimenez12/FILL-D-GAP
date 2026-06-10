import MENU from '../Componentes/Menu.jsx'
import BANNER from '../Componentes/Bann-principal.jsx'
import METAS from '../Componentes/Metas.jsx'
import BANNERFIN from '../Componentes/banner-fin.jsx'
function App() {

  return (
    <>
      <section className="bg-[#EDEDED] min-h-screen">
        <MENU />
        <BANNER />
        <METAS/>
        <BANNERFIN/>
      </section>

    </>
  )
}

export default App
