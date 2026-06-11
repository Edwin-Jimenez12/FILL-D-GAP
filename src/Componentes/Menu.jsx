import { useState } from 'react';
import { HelpCircle, Users, UserPlus, Mail, Menu as IconMenu, X as CloseIcon } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

function Menu() {
    const [menuOpen, menusetOpen] = useState(false);
    const navigate = useNavigate()
    const location = useLocation()

    const scrollToSection = (id) => {
        menusetOpen(false);

        // Función interna para calcular la posición exacta restando el menú flotante
        const performScroll = () => {
            const element = document.getElementById(id);
            if (element) {
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - 80;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        };

        if (location.pathname === '/') {
            setTimeout(performScroll, 100);
        } else {
            navigate('/');
            setTimeout(performScroll, 400);
        }
    };
    
    if (menuOpen) {
        return (
            <div className="fixed top-0 left-0 bg-gray-900 min-h-screen w-full transition-all duration-300 z-50">
                <nav className=" flex mx-3 py-2 justify-between items-center">
                    <div className=" flex gap-3 items-center">
                        <img src="/Redes-sociales.svg" alt="Logo Nuevo Menú" className="w-10 cursor-pointer" 
                        onClick={() => {
                            navigate('/');
                            menusetOpen(false);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        /> 
                        <h1 className='text-[#F8FCFB] font-montserrat font-bold '
                        onClick={()=>{
                            menusetOpen(false);
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                        >
                            FILL D GAP
                            </h1>
                    </div>
                    
                    <div>
                        <button 
                            onClick={() => menusetOpen(false)} 
                            className="text-white focus:outline-none flex items-center justify-center"
                        >
                            <CloseIcon className="h-10 w-auto" />
                        </button>
                    </div>
                </nav>

                <div className="px-6 py-8">
                    <ul className="flex flex-col gap-6 text-xl text-white">
                        <li className="flex items-center gap-3 py-3 border-b border-gray-800 cursor-pointer"
                        onClick={() => scrollToSection('futuro-tuyo')}>
                            <HelpCircle className="w-6 h-6 text-blue-400" />
                            Tu futuro
                        </li>
                        <li className="flex items-center gap-3 py-3 border-b border-gray-800 cursor-pointer"
                        onClick = {()=> {
                            navigate('/Nosotros');
                            }}
                        >
                            <Users className="w-6 h-6 text-blue-400" />
                            Nosotros
                        </li>
                        <li className="flex items-center gap-3 py-3 border-b border-gray-800 cursor-pointer">
                            <UserPlus className="w-6 h-6 text-blue-400" />
                            Inscripción
                        </li>
                        <li className="flex items-center gap-3 py-3 cursor-pointer">
                            <Mail className="w-6 h-6 text-blue-400" />
                            Contáctanos
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
{/* Menú de PC */}
    return (
        <div className="bg-[#262788] sticky top-0 left-0 right-0 z-50 shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
            <nav className="md:mx-10 mx-3 py-2 md:py-3 flex justify-between items-center md:gap-2">
                <div className=" flex gap-3 items-center">
                    <img src="/Redes-sociales.svg" alt="IconMenu" className="md:w-15 w-10 cursor-pointer transition duration-200 hover:scale-105" 
                    onClick={() => { 
                        menusetOpen(false);
                        navigate('/');
                        window.scrollTo({ top: 0, behavior: 'smooth' })}} /> 
                    <h1 className='text-[#F8FCFB] font-montserrat font-bold md:text-xl cursor-pointer hover:scale-105 duration-200'
                        onClick={()=>{
                            navigate('/');
                            menusetOpen(false);
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                        >
                            FILL D GAP
                            </h1>
                </div>
                <div className="hidden md:block">
                    <ul className="md:flex md:gap-10 text-lg text-[#F8FCFB]">
                        <li className="flex items-center gap-2 cursor-pointer transition duration-200 hover:scale-105"
                        onClick={() => scrollToSection('futuro-tuyo')}>
                            <HelpCircle className="w-5 h-5 text-white" />
                            Tu futuro
                        </li>
                        <li className="flex items-center gap-2 cursor-pointer transition duration-200 hover:scale-105"
                        onClick = {()=> {
                            navigate('/Nosotros');
                            }}
                        >
                            <Users className="w-5 h-5 text-white" />
                            Nosotros
                        </li>
                        <li className="flex items-center gap-2 cursor-pointer transition duration-200 hover:scale-105">
                            <UserPlus className="w-5 h-5 text-white" />
                            Inscripción
                        </li>
                        <li className="flex items-center gap-2 cursor-pointer transition duration-200 hover:scale-105">
                            <Mail className="w-5 h-5 text-white" />
                            Contáctanos
                        </li>
                    </ul>
                </div>
                <div className="md:invisible">
                    <button 
                        onClick={() => menusetOpen(true)} 
                        className="text-[#F8FCFB] focus:outline-none flex items-center justify-center"
                    >
                        <IconMenu className="h-10 w-auto" />
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Menu;