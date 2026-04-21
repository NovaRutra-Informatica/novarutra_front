import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { WhyUsComponent } from './why-us.component';

describe('WhyUsComponent', () => {
    let component: WhyUsComponent;
    let fixture: ComponentFixture<WhyUsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [WhyUsComponent],
            providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
        }).compileComponents();

        fixture = TestBed.createComponent(WhyUsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('has exactly 4 items', () => {
        expect(component.items.length).toBe(4);
    });

    it('every item has icon, title, and desc', () => {
        for (const item of component.items) {
            expect(item.icon).toMatch(/^fas fa-/);
            expect(item.title).toBeTruthy();
            expect(item.desc).toBeTruthy();
        }
    });

    it('first item is about direct technician contact', () => {
        expect(component.items[0].title).toContain('técnico');
    });

    it('includes a guarantee item', () => {
        expect(
            component.items.some((i) =>
                i.title.toLowerCase().includes('garantia'),
            ),
        ).toBe(true);
    });

    it('renders 4 rows in the list', () => {
        const rows = fixture.nativeElement.querySelectorAll('.why-row');
        expect(rows.length).toBe(4);
    });

    it('rows have sequential numbering starting at 01', () => {
        const numbers = fixture.nativeElement.querySelectorAll('.row-number');
        expect(numbers[0].textContent?.trim()).toBe('01');
        expect(numbers[3].textContent?.trim()).toBe('04');
    });

    it('renders section heading', () => {
        const h2 = fixture.nativeElement.querySelector('h2') as HTMLElement;
        expect(h2.textContent).toBeTruthy();
    });
});
