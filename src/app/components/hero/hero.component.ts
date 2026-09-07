import {
    Component,
    OnInit,
    OnDestroy,
    Inject,
    PLATFORM_ID,
    signal,
    ChangeDetectionStrategy,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface HeroSlide {
    id: string;
    alt: string;
}

@Component({
    selector: 'app-hero',
    standalone: true,
    templateUrl: './hero.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, OnDestroy {
    heroImages: HeroSlide[] = [
        { id: 'image1', alt: 'Técnico realizando manutenção de computador' },
        { id: 'image4', alt: 'Notebook aberto para reparo em bancada' },
        { id: 'image6', alt: 'Servidor sendo configurado' },
        { id: 'image7', alt: 'Atendimento técnico especializado' },
        { id: 'image8', alt: 'Diagnóstico de hardware' },
        { id: 'image9', alt: 'Manutenção preventiva em equipamento' },
        { id: 'image10', alt: 'Reparo de peças de computador' },
    ];

    currentIndex = signal(0);
    private intervalId: ReturnType<typeof setInterval> | null = null;
    private readonly isBrowser: boolean;

    constructor(@Inject(PLATFORM_ID) platformId: object) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    ngOnInit() {
        if (!this.isBrowser) return;
        // NOTE: Defer the carousel so it does not compete with LCP or hydration.
        const start = () => this.startCarousel();
        if ('requestIdleCallback' in window) {
            (
                window as unknown as {
                    requestIdleCallback: (
                        cb: () => void,
                        opts?: { timeout: number },
                    ) => number;
                }
            ).requestIdleCallback(start, { timeout: 3000 });
        } else {
            setTimeout(start, 2000);
        }
    }

    ngOnDestroy() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    private startCarousel() {
        this.intervalId = setInterval(() => {
            this.currentIndex.update(
                (index) => (index + 1) % this.heroImages.length,
            );
        }, 5000);
    }
}
