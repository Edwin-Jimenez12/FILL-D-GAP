import MENU from '../Componentes/Menu.jsx'

function Nosotros (){
    return(
        <section id='NOSOTROS' className="min-h-screen bg-[#F8FCFB]">
            <MENU/>
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10 py-14 md:py-20">
                <p className="font-montserrat text-sm uppercase tracking-[0.24em] text-[#262788] font-semibold mb-3">
                    Nosotros
                </p>
                <h1 className="font-montserrat text-4xl md:text-6xl font-bold text-[#262788] leading-tight">
                    Fill D Gap nace para conectar talento con necesidades temporales.
                </h1>
                <p className="font-montserrat text-base md:text-lg text-[#2B2B2B] mt-6 max-w-3xl">
                    Esta sección queda como respaldo de confianza y contexto para quien quiera conocer más sobre la comunidad y el proyecto.
                </p>
            </div>
        </section>
    )
}

export default Nosotros
