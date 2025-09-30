import AnimateOnScroll from "./AnimateOnScroll";
import Logo from "@assets/LOGO_WHITE.png";

export default function About() {
    return (
        <div id="sobre" className="bg-white py-24 sm:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <AnimateOnScroll direction="left" className="lg:pr-4">
                        <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                            <img
                                className="absolute inset-0 h-full w-full object-contain"
                                src={Logo}
                                alt="Logo da Novarutra"
                            />
                        </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll direction="right" delay={200}>
                        <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-novarutra-blue">Quem sou eu</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Um especialista dedicado ao seu negócio
                            </h1>
                            <div className="max-w-xl">
                                <p className="mt-6">
                                    Meu nome é <strong>Alessandro Pereira Lima Filho</strong>, sou o fundador e técnico especialista por trás da Novarutra Informática. Com anos de experiência no mercado, minha missão é oferecer um serviço de T.I. personalizado e de alta qualidade.
                                </p>
                                <p className="mt-8">
                                    Acredito que a tecnologia deve ser uma aliada, não uma complicação. Por isso, atendo cada cliente de forma direta e transparente, tratando sua empresa como uma parceira e garantindo que sua infraestrutura tecnológica funcione perfeitamente para que você possa focar no que realmente importa: o crescimento do seu negócio.
                                </p>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </div>
    );
}