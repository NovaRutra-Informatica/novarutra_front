import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import AnimateOnScroll from './AnimateOnScroll';
import { useCallback } from 'react';

const testimonials = [
    {
        quote: "O Alessandro resolveu um problema complexo em nossa rede que vários outros técnicos não conseguiram. O atendimento foi rápido e o profissionalismo é notável. Recomendo fortemente!",
        author: "João da Silva",
        company: "Empresa Exemplo 1",
    },
    {
        quote: "Contratamos a Novarutra para a manutenção preventiva dos nossos servidores. O serviço superou as expectativas, garantindo que nossa operação continuasse sem nenhuma interrupção.",
        author: "Maria Oliveira",
        company: "Empresa Exemplo 2",
    },
    {
        quote: "O suporte remoto é incrível. Sempre que precisamos, o Alessandro está disponível para nos ajudar com agilidade e conhecimento técnico. Um parceiro essencial para nossa empresa.",
        author: "Carlos Souza",
        company: "Empresa Exemplo 3",
    },
]

export default function Testimonials() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])


    return (
        <AnimateOnScroll direction="zoom">
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            O que meus clientes dizem
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Resultados e confiança construídos através de um serviço de excelência.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="embla mt-16" ref={emblaRef}>
                            <div className="embla__container">
                                {testimonials.map((testimonial, index) => (
                                    <div className="embla__slide" key={index}>
                                        <figure className="mx-auto max-w-4xl">
                                            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                                                <p>“{testimonial.quote}”</p>
                                            </blockquote>
                                            <figcaption className="mt-10">
                                                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                                                    <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                                                        <circle cx={1} cy={1} r={1} />
                                                    </svg>
                                                    <div className="text-gray-600">{testimonial.company}</div>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button onClick={scrollPrev} className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-novarutra-blue/20 p-2 text-novarutra-blue hover:bg-novarutra-blue/40 transition-all duration-300 hover:scale-110 active:scale-100">
                            <ChevronLeftIcon className="h-6 w-6" />
                        </button>
                        <button onClick={scrollNext} className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-novarutra-blue/20 p-2 text-novarutra-blue hover:bg-novarutra-blue/40 transition-all duration-300 hover:scale-110 active:scale-100">
                            <ChevronRightIcon className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
        </AnimateOnScroll>
    );
}