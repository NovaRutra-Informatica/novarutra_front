import ClientLogo1 from "@assets/LOGO_WHITE.png";
import ClientLogo2 from "@assets/novarutra_sem_fundo.png";
import AnimateOnScroll from "@components/AnimateOnScroll.tsx";

export default function Clients() {
    return (
        <div id="clientes" className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <AnimateOnScroll className="mx-auto max-w-2xl lg:max-w-none">
                    <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Empresas que confiam em nosso trabalho
                    </h2>
                    <div className="mx-auto mt-16 grid grid-cols-4 items-center gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
                        <AnimateOnScroll direction="zoom" delay={0}>
                            <img
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                    src={ClientLogo1}
                                    alt="Client 1"
                                    width={158}
                                    height={48}
                                />
                        </AnimateOnScroll>
                        <AnimateOnScroll direction="zoom" delay={100}>
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src={ClientLogo2}
                            alt="Client 2"
                            width={158}
                            height={48}
                        />
                        </AnimateOnScroll>
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src={ClientLogo1}
                            alt="Client 3"
                            width={158}
                            height={48}
                        />
                        <AnimateOnScroll direction="zoom" delay={200}>
                        <img
                            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                            src={ClientLogo2}
                            alt="Client 4"
                            width={158}
                            height={48}
                        />
                        </AnimateOnScroll>
                        <AnimateOnScroll direction="zoom" delay={300}>
                        <img
                            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                            src={ClientLogo1}
                            alt="Client 5"
                            width={158}
                            height={48}
                        />
                        </AnimateOnScroll>
                    </div>
                </AnimateOnScroll>
            </div>
        </div>
    );
}