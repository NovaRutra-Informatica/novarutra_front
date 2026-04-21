import {
    AfterViewInit,
    Component,
    ElementRef,
    Inject,
    Input,
    OnDestroy,
    PLATFORM_ID,
    signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-terminal',
    standalone: true,
    templateUrl: './terminal.component.html',
    styleUrl: './terminal.component.scss',
})
export class TerminalComponent implements AfterViewInit, OnDestroy {
    @Input({ required: true }) text = '';

    protected displayedText = signal('');
    protected isDone = signal(false);

    private observer: IntersectionObserver | null = null;
    private timeoutId: ReturnType<typeof setTimeout> | null = null;
    private readonly isBrowser: boolean;

    constructor(
        private el: ElementRef,
        @Inject(PLATFORM_ID) platformId: object,
    ) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    ngAfterViewInit() {
        if (!this.isBrowser) {
            this.displayedText.set(this.text);
            this.isDone.set(true);
            return;
        }

        this.observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    this.startTyping();
                    this.observer?.disconnect();
                }
            },
            { threshold: 0.3 },
        );
        this.observer.observe(this.el.nativeElement);
    }

    ngOnDestroy() {
        this.observer?.disconnect();
        if (this.timeoutId) clearTimeout(this.timeoutId);
    }

    private startTyping() {
        let index = 0;
        const type = () => {
            if (index >= this.text.length) {
                this.isDone.set(true);
                return;
            }
            this.displayedText.update((t) => t + this.text[index++]);
            const char = this.text[index - 1];
            const delay = '.!?'.includes(char)
                ? 240
                : ',;:—'.includes(char)
                  ? 90
                  : char === '\n'
                    ? 180
                    : 22;
            this.timeoutId = setTimeout(type, delay);
        };
        this.timeoutId = setTimeout(type, 800);
    }
}
