import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { TerminalComponent } from './terminal.component';

describe('TerminalComponent', () => {
    describe('SSR mode (server platform)', () => {
        let component: TerminalComponent;
        let fixture: ComponentFixture<TerminalComponent>;

        beforeEach(async () => {
            await TestBed.configureTestingModule({
                imports: [TerminalComponent],
                providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
            }).compileComponents();

            fixture = TestBed.createComponent(TerminalComponent);
            component = fixture.componentInstance;
            component.text = 'Hello NovaRutra';
            fixture.detectChanges();
            await fixture.whenStable();
        });

        it('should create', () => {
            expect(component).toBeTruthy();
        });

        it('shows the full text immediately on server render', () => {
            const output = fixture.nativeElement.querySelector(
                '.output-text',
            ) as HTMLElement;
            expect(output.textContent).toContain('Hello NovaRutra');
        });

        it('cursor is hidden after SSR render (isDone)', () => {
            const cursor = fixture.nativeElement.querySelector('.cursor');
            expect(cursor.classList).toContain('hidden');
        });

        it('renders terminal bar with macOS-style dots', () => {
            expect(
                fixture.nativeElement.querySelector('.dot-red'),
            ).toBeTruthy();
            expect(
                fixture.nativeElement.querySelector('.dot-yellow'),
            ).toBeTruthy();
            expect(
                fixture.nativeElement.querySelector('.dot-green'),
            ).toBeTruthy();
        });

        it('renders the command line prompt', () => {
            const prompt = fixture.nativeElement.querySelector(
                '.prompt',
            ) as HTMLElement;
            expect(prompt.textContent).toBe('$');
        });

        it('renders the cat command', () => {
            const cmd = fixture.nativeElement.querySelector(
                '.cmd',
            ) as HTMLElement;
            expect(cmd.textContent).toContain('cat');
        });
    });

    describe('browser mode (client platform)', () => {
        let component: TerminalComponent;
        let fixture: ComponentFixture<TerminalComponent>;

        beforeEach(async () => {
            Object.defineProperty(window, 'IntersectionObserver', {
                writable: true,
                configurable: true,
                value: function () {
                    return { observe: () => {}, disconnect: () => {} };
                },
            });

            await TestBed.configureTestingModule({
                imports: [TerminalComponent],
                providers: [{ provide: PLATFORM_ID, useValue: 'browser' }],
            }).compileComponents();

            fixture = TestBed.createComponent(TerminalComponent);
            component = fixture.componentInstance;
            component.text = 'Hello';
            fixture.detectChanges();
            await fixture.whenStable();
        });

        it('starts with empty displayed text before intersection', () => {
            const output = fixture.nativeElement.querySelector(
                '.output-text',
            ) as HTMLElement;
            // Cursor is the only child text; actual text not typed yet
            expect(output.textContent?.replace('▋', '')).toBe('');
        });

        it('cursor is visible before typing starts', () => {
            const cursor = fixture.nativeElement.querySelector('.cursor');
            expect(cursor.classList).not.toContain('hidden');
        });

        it('ngOnDestroy disconnects the observer', () => {
            const disconnectSpy = { called: false };
            (component as any).observer = {
                disconnect: () => {
                    disconnectSpy.called = true;
                },
            };
            component.ngOnDestroy();
            expect(disconnectSpy.called).toBe(true);
        });
    });
});
