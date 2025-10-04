import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import Banner1 from "@assets/NovaRutraAzul.jpg";
import Banner3 from "@assets/image1.jpeg";
import Banner6 from "@assets/image4.jpeg";
import Banner8 from "@assets/image6.jpeg";
import Banner9 from "@assets/image7.jpeg";
import Banner10 from "@assets/image8.jpeg";
import Banner11 from "@assets/image9.jpeg";
import Banner12 from "@assets/image10.jpeg";

const images = [
    Banner3,
    Banner6,
    Banner8,
    Banner9,
    Banner10,
    Banner11,
    Banner12,
    Banner1
];

export default function HeroCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 5000, stopOnInteraction: false })
    ]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (emblaApi) {
            const onSelect = () => {
                setActiveIndex(emblaApi.selectedScrollSnap());
            };
            emblaApi.on("select", onSelect);
            onSelect();
            return () => {
                emblaApi.off("select", onSelect);
            };
        }
    }, [emblaApi]);

    return (
        <div className="embla-hero" ref={emblaRef}>
            <div className="embla__container h-full">
                {images.map((src, index) => (
                    <div
                        className={`embla__slide embla-hero__slide ${index === activeIndex ? "is-active" : ""}`}
                        key={index}
                    >
                        <img
                            src={src}
                            className="embla-hero__slide__img"
                            alt={`Banner de fundo ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
