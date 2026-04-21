import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { vi } from 'vitest';
import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
    let component: HeroComponent;
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HeroComponent],
            // server prevents ngOnInit from auto-starting the interval
            providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
        }).compileComponents();

        fixture = TestBed.createComponent(HeroComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('has 7 hero images', () => {
        expect(component.heroImages.length).toBe(7);
    });

    it('currentIndex starts at 0', () => {
        expect(component.currentIndex()).toBe(0);
    });

    it('all image paths start with assets/', () => {
        expect(
            component.heroImages.every((img) => img.startsWith('assets/')),
        ).toBe(true);
    });

    it('startCarousel advances the index every 5 seconds', () => {
        vi.useFakeTimers();
        component.startCarousel();

        expect(component.currentIndex()).toBe(0);
        vi.advanceTimersByTime(5000);
        expect(component.currentIndex()).toBe(1);
        vi.advanceTimersByTime(5000);
        expect(component.currentIndex()).toBe(2);

        vi.clearAllTimers();
    });

    it('carousel wraps around after the last image', () => {
        vi.useFakeTimers();
        component.startCarousel();

        vi.advanceTimersByTime(5000 * 7); // 7 full cycles
        expect(component.currentIndex()).toBe(0);

        vi.clearAllTimers();
    });

    it('ngOnDestroy stops the carousel', () => {
        vi.useFakeTimers();
        component.startCarousel();
        vi.advanceTimersByTime(5000);
        expect(component.currentIndex()).toBe(1);

        component.ngOnDestroy();
        vi.advanceTimersByTime(5000);
        expect(component.currentIndex()).toBe(1); // stays at 1
    });

    it('renders hero section with id "inicio"', () => {
        expect(fixture.nativeElement.querySelector('#inicio')).toBeTruthy();
    });

    it('renders h1 heading', () => {
        expect(fixture.nativeElement.querySelector('h1')).toBeTruthy();
    });
});
