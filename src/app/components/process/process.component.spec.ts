import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { ProcessComponent } from './process.component';

describe('ProcessComponent', () => {
    let component: ProcessComponent;
    let fixture: ComponentFixture<ProcessComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProcessComponent],
            providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
        }).compileComponents();

        fixture = TestBed.createComponent(ProcessComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('has exactly 4 steps', () => {
        expect(component.steps.length).toBe(4);
    });

    it('steps are numbered 01 through 04 in order', () => {
        const numbers = component.steps.map((s) => s.number);
        expect(numbers).toEqual(['01', '02', '03', '04']);
    });

    it('every step has title, desc, and icon', () => {
        for (const step of component.steps) {
            expect(step.title).toBeTruthy();
            expect(step.desc).toBeTruthy();
            expect(step.icon).toMatch(/^fas fa-/);
        }
    });

    it('first step is Diagnóstico', () => {
        expect(component.steps[0].title).toBe('Diagnóstico');
    });

    it('last step is Garantia', () => {
        expect(component.steps[3].title).toBe('Garantia');
    });

    it('renders a timeline list', () => {
        expect(fixture.nativeElement.querySelector('.timeline')).toBeTruthy();
    });

    it('renders 4 timeline items', () => {
        const items = fixture.nativeElement.querySelectorAll('.timeline-item');
        expect(items.length).toBe(4);
    });

    it('odd items have item-left class', () => {
        const items = fixture.nativeElement.querySelectorAll('.timeline-item');
        expect(items[0].classList).toContain('item-left');
        expect(items[2].classList).toContain('item-left');
    });

    it('even-indexed items have item-right class', () => {
        const items = fixture.nativeElement.querySelectorAll('.timeline-item');
        expect(items[1].classList).toContain('item-right');
        expect(items[3].classList).toContain('item-right');
    });
});
