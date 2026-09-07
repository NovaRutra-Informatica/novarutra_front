import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { StatsComponent } from './stats.component';

describe('StatsComponent', () => {
    let component: StatsComponent;
    let fixture: ComponentFixture<StatsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [StatsComponent],
            providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
        }).compileComponents();

        fixture = TestBed.createComponent(StatsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('has exactly 4 stats', () => {
        expect(component.stats.length).toBe(4);
    });

    it('every stat has label, value, and suffix', () => {
        for (const stat of component.stats) {
            expect(stat.label).toBeTruthy();
            expect(typeof stat.value).toBe('number');
            expect(typeof stat.suffix).toBe('string');
        }
    });

    it('first stat is "Equipamentos Reparados" with value 150', () => {
        expect(component.stats[0].label).toBe('Equipamentos Reparados');
        expect(component.stats[0].value).toBe(150);
        expect(component.stats[0].suffix).toBe('+');
    });

    it('last stat is 24/7 support', () => {
        const last = component.stats[component.stats.length - 1];
        expect(last.value).toBe(24);
        expect(last.suffix).toBe('/7');
    });

    it('renders 4 stat items in the DOM', () => {
        const items = fixture.nativeElement.querySelectorAll('.stat-item');
        expect(items.length).toBe(4);
    });

    it('shows final stat values on server render (no animation)', () => {
        const numbers = fixture.nativeElement.querySelectorAll('.number');
        expect(numbers[0].textContent).toContain('150');
        expect(numbers[2].textContent).toContain('100');
    });
});
