import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

type AnimationDirection = "up" | "down" | "left" | "right" | "zoom";

interface AnimateOnScrollProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: AnimationDirection;
}

export default function AnimateOnScroll({
                                            children,
                                            className = "",
                                            delay = 0,
                                            direction = "up",
                                        }: AnimateOnScrollProps) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const getInitialClasses = () => {
        switch (direction) {
            case "up":
                return "opacity-0 translate-y-10";
            case "down":
                return "opacity-0 -translate-y-10";
            case "left":
                return "opacity-0 -translate-x-10";
            case "right":
                return "opacity-0 translate-x-10";
            case "zoom":
                return "opacity-0 scale-95";
            default:
                return "opacity-0";
        }
    };

    const animationClasses = inView
        ? "opacity-100 translate-y-0 translate-x-0 scale-100"
        : getInitialClasses();

    const transitionDelay = `${delay}ms`;

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${animationClasses} ${className}`}
            style={{ transitionDelay }}
        >
            {children}
        </div>
    );
}