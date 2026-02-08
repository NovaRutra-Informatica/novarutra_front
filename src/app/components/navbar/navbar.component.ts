import {
    Component,
    HostListener,
    Inject,
    PLATFORM_ID,
    signal,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    isScrolled = signal(false);
    isMobileMenuOpen = signal(false);
    private readonly isBrowser: boolean;

    constructor(@Inject(PLATFORM_ID) platformId: Object) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        if (this.isBrowser) {
            this.isScrolled.set(window.scrollY > 50);
        }
    }

    toggleMobileMenu() {
        this.isMobileMenuOpen.update((value) => !value);
    }

    closeMenu() {
        this.isMobileMenuOpen.set(false);
    }
}
