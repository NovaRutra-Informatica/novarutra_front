import {
    Directive,
    ElementRef,
    OnInit,
    Renderer2,
    Inject,
    PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
    selector: '[appFadeIn]',
    standalone: true,
})
export class FadeInDirective implements OnInit {
    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
        @Inject(PLATFORM_ID) private platformId: Object,
    ) {}

    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.renderer.addClass(this.el.nativeElement, 'fade-in-up');
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            this.renderer.addClass(
                                this.el.nativeElement,
                                'visible',
                            );
                            observer.unobserve(this.el.nativeElement);
                        }
                    });
                },
                { threshold: 0.1 },
            );

            observer.observe(this.el.nativeElement);
        }
    }
}
