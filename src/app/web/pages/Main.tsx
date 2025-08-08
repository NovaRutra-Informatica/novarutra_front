import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";

export default function Main() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
            <div className="text-center max-w-2xl">
                <WrenchScrewdriverIcon className="mx-auto h-20 w-20 text-yellow-500 mb-6" />

                <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                    Site em Construção
                </h1>

                <p className="text-lg md:text-xl text-gray-300 mb-8">
                    Nossa equipe está trabalhando a todo vapor para trazer uma
                    nova experiência para você. Voltaremos em breve!
                </p>

                <div className="mt-8">
                    <p className="text-gray-400">
                        Enquanto isso, entre em contato conosco pelo e-mail:
                    </p>
                    <a
                        href="mailto:suporteti@novarutra.com.br"
                        className="text-yellow-400 hover:text-yellow-500 font-medium transition-colors duration-300"
                    >
                        suporteti@novarutra.com.br
                    </a>
                </div>
            </div>

            <footer className="absolute bottom-6 text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} NOVARUTRA INFORMATICA LDTA.
                Todos os direitos reservados.
            </footer>
        </div>
    );
}
