import {
    Directive,
    ElementRef,
    Input,
    AfterViewInit,
    Renderer2,
    Inject,
    PLATFORM_ID,
    NgZone,
    OnDestroy,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
    selector: '[appCountUp]',
    standalone: true,
})
export class CountUpDirective implements AfterViewInit, OnDestroy {
    @Input('appCountUp') endValue: number = 0;
    @Input() duration: number = 2000;
    @Input() suffix: string = '';
    @Input() prefix: string = '';

    private hasAnimated = false;
    private observer: IntersectionObserver | null = null;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
        @Inject(PLATFORM_ID) private platformId: Object,
        private ngZone: NgZone,
    ) {}

    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.ngZone.runOutsideAngular(() => {
                this.createObserver();
            });
        } else {
            this.setValue(this.endValue);
        }
    }

    ngOnDestroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }

    private createObserver() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !this.hasAnimated) {
                    this.animate();
                    this.hasAnimated = true;
                    this.observer?.disconnect();
                }
            });
        }, options);

        this.observer.observe(this.el.nativeElement);
    }

    private animate() {
        let startTimestamp: number | null = null;

        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min(
                (timestamp - startTimestamp) / this.duration,
                1,
            );
            const easeProgress =
                progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            const currentCount = Math.floor(easeProgress * this.endValue);

            this.setValue(currentCount);

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }

    private setValue(val: number) {
        this.renderer.setProperty(
            this.el.nativeElement,
            'textContent',
            this.prefix + val + this.suffix,
        );
    }
}
