import AnimateOnScroll from "./AnimateOnScroll";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
    return (
        <div id="inicio" className="relative isolate overflow-hidden bg-gray-900 pt-14">
            <HeroCarousel />

            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="text-center">
                    <AnimateOnScroll>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Suporte de T.I. dedicado para sua empresa
                        </h1>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={200}>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Atendimento técnico especializado em manutenção de computadores, servidores, redes e suporte remoto, garantindo a estabilidade do seu ambiente de trabalho.
                        </p>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={400}>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#servicos"
                                className="rounded-md bg-novarutra-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-novarutra-blue
                                transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-100"
                            >
                                Conheça meus serviços
                            </a>
                            <a href="#contato" className="text-sm font-semibold leading-6 text-white transition-transform duration-300 hover:scale-105">
                                Fale comigo <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </div>
    );
}