import { Component, PLATFORM_ID } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountUpDirective } from './count-up.directive';

@Component({
    template: `<span [appCountUp]="value" [suffix]="suffix" [duration]="500"
        >0</span
    >`,
    standalone: true,
    imports: [CountUpDirective],
})
class TestHostComponent {
    value = 150;
    suffix = '+';
}

@Component({
    template: `<span
        [appCountUp]="99"
        prefix="R$ "
        suffix=" reais"
        [duration]="500"
        >0</span
    >`,
    standalone: true,
    imports: [CountUpDirective],
})
class PrefixHostComponent {}

describe('CountUpDirective', () => {
    describe('on server platform (SSR)', () => {
        let fixture: ComponentFixture<TestHostComponent>;
        let host: TestHostComponent;

        beforeEach(async () => {
            await TestBed.configureTestingModule({
                imports: [TestHostComponent],
                providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
            }).compileComponents();

            fixture = TestBed.createComponent(TestHostComponent);
            host = fixture.componentInstance;
            fixture.detectChanges();
            await fixture.whenStable();
        });

        it('should create', () => {
            expect(host).toBeTruthy();
        });

        it('shows the final value immediately without animation', () => {
            const span = fixture.nativeElement.querySelector(
                'span',
            ) as HTMLElement;
            expect(span.textContent).toContain('150');
            expect(span.textContent).toContain('+');
        });
    });

    describe('with prefix (server platform)', () => {
        it('shows prefix + value + suffix correctly', async () => {
            await TestBed.configureTestingModule({
                imports: [PrefixHostComponent],
                providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
            }).compileComponents();

            const f = TestBed.createComponent(PrefixHostComponent);
            f.detectChanges();
            await f.whenStable();

            const span = f.nativeElement.querySelector('span') as HTMLElement;
            expect(span.textContent).toContain('99');
            expect(span.textContent).toContain('R$');
            expect(span.textContent).toContain('reais');
        });
    });

    describe('on browser platform', () => {
        beforeEach(async () => {
            Object.defineProperty(window, 'IntersectionObserver', {
                writable: true,
                configurable: true,
                value: function (_cb: IntersectionObserverCallback) {
                    return {
                        observe: () => {},
                        disconnect: () => {},
                    };
                },
            });

            await TestBed.configureTestingModule({
                imports: [TestHostComponent],
                providers: [{ provide: PLATFORM_ID, useValue: 'browser' }],
            }).compileComponents();
        });

        it('does not immediately show the final value (waits for intersection)', async () => {
            const fixture = TestBed.createComponent(TestHostComponent);
            fixture.detectChanges();
            await fixture.whenStable();
            // No intersection fired → textContent stays at initial '0'
            const span = fixture.nativeElement.querySelector(
                'span',
            ) as HTMLElement;
            expect(span.textContent).not.toContain('150');
        });
    });
});
