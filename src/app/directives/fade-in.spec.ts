import { Component, PLATFORM_ID } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FadeInDirective } from './fade-in.directive';

@Component({
    template: `<div appFadeIn data-testid="target"></div>`,
    standalone: true,
    imports: [FadeInDirective],
})
class TestHostComponent {}

describe('FadeInDirective', () => {
    it('should create an instance', async () => {
        await TestBed.configureTestingModule({
            imports: [TestHostComponent],
            providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
        }).compileComponents();

        const fixture = TestBed.createComponent(TestHostComponent);
        expect(fixture.componentInstance).toBeTruthy();
    });

    describe('on server platform', () => {
        let fixture: ComponentFixture<TestHostComponent>;

        beforeEach(async () => {
            await TestBed.configureTestingModule({
                imports: [TestHostComponent],
                providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
            }).compileComponents();

            fixture = TestBed.createComponent(TestHostComponent);
            fixture.detectChanges();
        });

        it('does not add fade-in-up class (SSR safe)', () => {
            const el = fixture.nativeElement.querySelector(
                '[data-testid="target"]',
            );
            expect(el.classList).not.toContain('fade-in-up');
        });
    });

    describe('on browser platform', () => {
        let fixture: ComponentFixture<TestHostComponent>;
        const mockObserver = {
            observe: () => {},
            unobserve: () => {},
            disconnect: () => {},
        };

        beforeEach(async () => {
            Object.defineProperty(window, 'IntersectionObserver', {
                writable: true,
                configurable: true,
                value: function () {
                    return mockObserver;
                },
            });

            await TestBed.configureTestingModule({
                imports: [TestHostComponent],
                providers: [{ provide: PLATFORM_ID, useValue: 'browser' }],
            }).compileComponents();

            fixture = TestBed.createComponent(TestHostComponent);
            fixture.detectChanges();
        });

        it('adds fade-in-up class to the host element', () => {
            const el = fixture.nativeElement.querySelector(
                '[data-testid="target"]',
            );
            expect(el.classList).toContain('fade-in-up');
        });
    });
});
