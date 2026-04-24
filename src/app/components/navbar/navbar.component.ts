import {
    Component,
    HostListener,
    Inject,
    PLATFORM_ID,
    signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    isScrolled = signal(false);
    isMobileMenuOpen = signal(false);
    private readonly isBrowser: boolean;
    private scrollRafId: number | null = null;

    constructor(@Inject(PLATFORM_ID) platformId: Object) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    // Reading window.scrollY and updating the signal on every scroll event
    // schedules a layout read + style change per tick, which Chrome flags as
    // a forced reflow. Coalesce reads into a single rAF so the layout query
    // and the signal write happen once per frame.
    @HostListener('window:scroll', [])
    onWindowScroll() {
        if (!this.isBrowser || this.scrollRafId !== null) return;

        this.scrollRafId = requestAnimationFrame(() => {
            this.scrollRafId = null;
            this.isScrolled.set(window.scrollY > 50);
        });
    }

    toggleMobileMenu() {
        this.isMobileMenuOpen.update((value) => !value);
    }

    closeMenu() {
        this.isMobileMenuOpen.set(false);
    }
}
