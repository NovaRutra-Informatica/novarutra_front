import {
    Component,
    OnInit,
    OnDestroy,
    Inject,
    PLATFORM_ID,
    signal,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, OnDestroy {
    heroImages: string[] = [
        'assets/image1.jpeg',
        'assets/image4.jpeg',
        'assets/image6.jpeg',
        'assets/image7.jpeg',
        'assets/image8.jpeg',
        'assets/image9.jpeg',
        'assets/image10.jpeg',
    ];

    currentIndex = signal(0);
    private intervalId: any;
    private readonly isBrowser: boolean;

    constructor(@Inject(PLATFORM_ID) platformId: Object) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    ngOnInit() {
        if (this.isBrowser) {
            this.startCarousel();
        }
    }

    ngOnDestroy() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    startCarousel() {
        this.intervalId = setInterval(() => {
            this.currentIndex.update(
                (index) => (index + 1) % this.heroImages.length,
            );
        }, 5000);
    }
}
