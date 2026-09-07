import {
    Component,
    HostListener,
    Inject,
    PLATFORM_ID,
    signal,
    ChangeDetectionStrategy,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
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

    // NOTE: coalesce scroll reads into rAF to avoid forced reflows.
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
