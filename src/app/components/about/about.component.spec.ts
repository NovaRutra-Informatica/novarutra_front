import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
    let component: AboutComponent;
    let fixture: ComponentFixture<AboutComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AboutComponent],
            providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
        }).compileComponents();

        fixture = TestBed.createComponent(AboutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('terminalText is non-empty', () => {
        expect(component.terminalText.length).toBeGreaterThan(0);
    });

    it('terminalText mentions Alessandro Lima', () => {
        expect(component.terminalText).toContain('Alessandro Lima');
    });

    it('terminalText mentions NovaRutra', () => {
        expect(component.terminalText).toContain('NovaRutra');
    });

    it('has 4 differentials', () => {
        expect(component.differentials.length).toBe(4);
    });

    it('every differential has icon and text', () => {
        for (const d of component.differentials) {
            expect(d.icon).toMatch(/^fas fa-/);
            expect(d.text).toBeTruthy();
        }
    });

    it('has 7 tech chips', () => {
        expect(component.techs.length).toBe(7);
    });

    it('techs include Windows and Linux', () => {
        expect(component.techs).toContain('Windows');
        expect(component.techs).toContain('Linux');
    });

    it('renders section with id "sobre"', () => {
        expect(fixture.nativeElement.querySelector('#sobre')).toBeTruthy();
    });

    it('renders the terminal component', () => {
        expect(
            fixture.nativeElement.querySelector('app-terminal'),
        ).toBeTruthy();
    });

    it('terminal shows the full text in SSR mode', () => {
        const output = fixture.nativeElement.querySelector(
            '.output-text',
        ) as HTMLElement;
        expect(output.textContent).toContain('Alessandro Lima');
    });

    it('renders differentials list', () => {
        const items = fixture.nativeElement.querySelectorAll(
            '.differentials-list li',
        );
        expect(items.length).toBe(4);
    });

    it('renders tech chips', () => {
        const chips = fixture.nativeElement.querySelectorAll('.chip');
        expect(chips.length).toBeGreaterThanOrEqual(7);
    });
});
