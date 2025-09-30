import { useState, useEffect } from "react";
import NovaRutraLogo from "@assets/LOGO_WHITE-WITHOUT_BACKGROUND.png";

export default function Header() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);


    const navLinks = [
        { name: "Início", href: "#inicio" },
        { name: "Sobre", href: "#sobre" },
        { name: "Serviços", href: "#servicos" },
        { name: "Clientes", href: "#clientes" },
        { name: "Contato", href: "#contato" },
    ];

    return (
        <header
            className={`bg-gray-900 bg-opacity-80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
            }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex h-full lg:flex-1">
                    <a href="#inicio" className="-m-1.5 h-10 items-center flex justify-center center p-1.5">
                        <img className="h-28 overflow-hidden w-auto" src={NovaRutraLogo} alt="NovaRutra Informática" />
                    </a>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navLinks.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white hover:text-novarutra-yellow transition-all duration-300 hover:scale-110">
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#contato" className="rounded-md bg-novarutra-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-novarutra-blue
                    transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-100">
                        Fale Conosco
                    </a>
                </div>
            </nav>
        </header>
    );
}