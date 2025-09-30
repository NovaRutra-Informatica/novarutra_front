import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useState } from 'react';
import Banner1 from "@assets/NovaRutraAzul.jpg";
import Banner2 from "@assets/BannerNovaRutra.png";

const images = [Banner1, Banner2];

export default function HeroCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 5000, stopOnInteraction: false }),
    ]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (emblaApi) {
            const onSelect = () => {
                setActiveIndex(emblaApi.selectedScrollSnap());
            };
            emblaApi.on('select', onSelect);
            onSelect();
            return () => { emblaApi.off('select', onSelect) };
        }
    }, [emblaApi]);


    return (
        <div className="embla-hero" ref={emblaRef}>
            <div className="embla__container h-full">
                {images.map((src, index) => (
                    <div
                        className={`embla__slide embla-hero__slide ${index === activeIndex ? 'is-active' : ''}`}
                        key={index}
                    >
                        <img src={src} className="embla-hero__slide__img" alt={`Banner de fundo ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}