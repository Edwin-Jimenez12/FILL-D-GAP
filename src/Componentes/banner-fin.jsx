import { FaFacebook, FaInstagram } from 'react-icons/fa';

function BannerFin () {
    return(
        <footer className="bg-[#262788] py-8 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                    <img src="/Logo.svg" alt="Logo Fill D Gap" className="w-24 object-contain" />
                    <div>
                        <h2 className="font-montserrat text-2xl md:text-4xl text-[#F8FCFB] font-bold leading-tight">
                            Talento temporal, impacto continuo.
                        </h2>
                        <p className="font-montserrat text-sm md:text-lg text-[#DFE4EA] mt-1">
                            Conectamos empresas con profesionales seleccionados para cubrir necesidades temporales.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-end gap-2 shrink-0">
                    <h3 className="font-montserrat text-sm md:text-base text-[#FECF64] font-bold uppercase tracking-wider">
                        Síguenos
                    </h3>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/filldgap.pa/">
                            <FaInstagram className="w-8 h-8 text-[#F8FCFB] hover:text-[#E9478F] cursor-pointer transition-all duration-300" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61590333467056">
                            <FaFacebook className="w-8 h-8 text-[#F8FCFB] hover:text-[#E9478F] cursor-pointer transition-all duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default BannerFin;
