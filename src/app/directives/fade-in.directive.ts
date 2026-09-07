import {
    afterNextRender,
    Directive,
    ElementRef,
    inject,
    PLATFORM_ID,
    Renderer2,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
    selector: '[appFadeIn]',
    standalone: true,
})
export class FadeInDirective {
    private readonly el = inject(ElementRef<HTMLElement>);
    private readonly renderer = inject(Renderer2);
    private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

    constructor() {
        if (!this.isBrowser) return;

        // NOTE: observe only after hydration to avoid an early layout recalculation.
        afterNextRender(() => {
            this.renderer.addClass(this.el.nativeElement, 'fade-in-up');

            const observer = new IntersectionObserver(
                (entries) => {
                    for (const entry of entries) {
                        if (entry.isIntersecting) {
                            this.renderer.addClass(
                                this.el.nativeElement,
                                'visible',
                            );
                            observer.unobserve(this.el.nativeElement);
                        }
                    }
                },
                { threshold: 0.1 },
            );

            observer.observe(this.el.nativeElement);
        });
    }
}
