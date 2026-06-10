import { FaFacebook, FaInstagram } from 'react-icons/fa';
function BannerFin (){
    return(
        <div className="bg-[#D4FCF4] flex items-center justify-between py-5 px-5">
            <div className="flex ">
                <img src="/Redes-sociales.png" alt="Logo Nuevo Menú" className="w-15 md:w-20" /> 
            <div>
                <h1 className="font-montserrat text-xl md:text-4xl text-[#262788] font-semibold">
                    Se parte del cambio.
                </h1>
                <h2 className="font-montserrat text-ms md:text-3xl text-[#262788]">
                    Juntos generando un impacto.
                </h2>
            </div>
            </div>
            <div>
                <h3>
                    Nuestras redes
                </h3>
                <div>
                    <FaFacebook className="w-8 h-8 text-[#262788] hover:text-[#E9478F] cursor-pointer transition-colors" />
                    <FaInstagram className="w-8 h-8 text-[#262788] hover:text-[#E9478F] cursor-pointer transition-colors" />
                </div>
            </div>
        </div>
    )
}export default BannerFin