import { ComputerDesktopIcon, WifiIcon, WrenchScrewdriverIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import AnimateOnScroll from "./AnimateOnScroll";

const services = [
    {
        name: "Manutenção de Dispositivos",
        description: "Manutenção preventiva e corretiva de computadores, notebooks e servidores para garantir o máximo desempenho e longevidade.",
        icon: ComputerDesktopIcon,
    },
    {
        name: "Infraestrutura de Redes",
        description: "Planejamento, montagem e manutenção de redes cabeadas e Wi-Fi, garantindo uma conexão estável e segura para sua empresa.",
        icon: WifiIcon,
    },
    {
        name: "Suporte Técnico Especializado",
        description: "Suporte remoto e presencial ágil para solucionar problemas de software e hardware, minimizando o tempo de inatividade.",
        icon: WrenchScrewdriverIcon,
    },
    {
        name: "Segurança e Backup",
        description: "Implementação de rotinas de backup e soluções de segurança para proteger seus dados contra perdas e ameaças digitais.",
        icon: ShieldCheckIcon,
    },
];

export default function Services() {
    return (
        <div id="servicos" className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <AnimateOnScroll className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-novarutra-yellow">Minhas Especialidades</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Soluções completas em Suporte de T.I.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Do suporte diário à infraestrutura complexa, ofereço a solução ideal para manter sua operação funcionando sem interrupções.
                    </p>
                </AnimateOnScroll>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    {services.map((service, index) => (
                        <AnimateOnScroll key={service.name} delay={index * 150}>
                            <div className="flex flex-col p-6 rounded-lg transition-all duration-300 hover:bg-white/5 hover:scale-105">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                                    <service.icon className="h-5 w-5 flex-none text-novarutra-yellow" aria-hidden="true" />
                                    {service.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                                    <p className="flex-auto">{service.description}</p>
                                </dd>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </dl>
            </div>
            </div>
        </div>
    )
}