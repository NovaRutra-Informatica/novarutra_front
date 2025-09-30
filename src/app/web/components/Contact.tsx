import { EnvelopeIcon } from "@heroicons/react/24/outline";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Contact() {
    return (
        <div id="contato" className="bg-gray-900 py-24 sm:py-32">
            <AnimateOnScroll className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Pronto para otimizar a TI da sua empresa?
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                    Vamos conversar sobre suas necessidades. Envie um e-mail e
                    retornarei o mais breve possível para agendarmos uma
                    conversa.
                </p>
                <div className="mt-10">
                    <a
                        href="mailto:suporteti@novarutra.com.br"
                        className="inline-flex items-center gap-x-3 rounded-md bg-novarutra-yellow px-6 py-4 text-lg font-semibold text-novarutra-blue shadow-lg hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-novarutra-yellow
                        transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100"
                    >
                        <EnvelopeIcon className="h-6 w-6" aria-hidden="true" />
                        Enviar um E-mail
                    </a>
                </div>
            </AnimateOnScroll>
        </div>
    );
}
