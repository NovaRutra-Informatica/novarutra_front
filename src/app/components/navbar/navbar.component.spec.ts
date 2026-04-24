import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NavbarComponent],
            providers: [{ provide: PLATFORM_ID, useValue: 'browser' }],
        }).compileComponents();

        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // The scroll handler defers via requestAnimationFrame; this helper runs
    // onWindowScroll and then flushes the pending frame callback.
    const scrollAndFlush = () =>
        new Promise<void>((resolve) => {
            component.onWindowScroll();
            requestAnimationFrame(() => resolve());
        });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('isScrolled starts as false', () => {
        expect(component.isScrolled()).toBe(false);
    });

    it('isMobileMenuOpen starts as false', () => {
        expect(component.isMobileMenuOpen()).toBe(false);
    });

    it('toggleMobileMenu opens the menu', () => {
        component.toggleMobileMenu();
        expect(component.isMobileMenuOpen()).toBe(true);
    });

    it('toggleMobileMenu closes the menu when already open', () => {
        component.toggleMobileMenu();
        component.toggleMobileMenu();
        expect(component.isMobileMenuOpen()).toBe(false);
    });

    it('closeMenu sets isMobileMenuOpen to false', () => {
        component.toggleMobileMenu();
        component.closeMenu();
        expect(component.isMobileMenuOpen()).toBe(false);
    });

    it('onWindowScroll sets isScrolled true when scrollY > 50', async () => {
        Object.defineProperty(window, 'scrollY', {
            value: 100,
            configurable: true,
            writable: true,
        });
        await scrollAndFlush();
        expect(component.isScrolled()).toBe(true);
    });

    it('onWindowScroll sets isScrolled false when scrollY <= 50', async () => {
        Object.defineProperty(window, 'scrollY', {
            value: 20,
            configurable: true,
            writable: true,
        });
        await scrollAndFlush();
        expect(component.isScrolled()).toBe(false);
    });

    it('renders the logo text', () => {
        const logo = fixture.nativeElement.querySelector(
            '.logo-text',
        ) as HTMLElement;
        expect(logo.textContent).toContain('NOVARUTRA');
    });

    it('renders 5 navigation menu items', () => {
        const items = fixture.nativeElement.querySelectorAll('.menu li');
        expect(items.length).toBe(5);
    });

    it('renders the mobile toggle button', () => {
        const btn = fixture.nativeElement.querySelector('.mobile-toggle');
        expect(btn).toBeTruthy();
    });

    it('menu gains active class when mobile menu is open', () => {
        component.toggleMobileMenu();
        fixture.detectChanges();
        const menu = fixture.nativeElement.querySelector('.menu');
        expect(menu.classList).toContain('active');
    });
});
