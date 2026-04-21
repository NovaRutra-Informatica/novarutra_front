import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartnersComponent } from './partners.component';

describe('PartnersComponent', () => {
    let component: PartnersComponent;
    let fixture: ComponentFixture<PartnersComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PartnersComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PartnersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('partners list has 10 entries (5 unique × 2 for seamless scroll)', () => {
        expect(component.partners.length).toBe(10);
    });

    it('first half matches second half for seamless loop', () => {
        const half = component.partners.length / 2;
        const first = component.partners.slice(0, half);
        const second = component.partners.slice(half);
        expect(first.map((p) => p.name)).toEqual(second.map((p) => p.name));
    });

    it('each partner has name and logo', () => {
        for (const partner of component.partners) {
            expect(partner.name).toBeTruthy();
            expect(partner.logo).toMatch(/^assets\//);
        }
    });

    it('renders a slide-track with partner images', () => {
        const slides = fixture.nativeElement.querySelectorAll('.slide');
        expect(slides.length).toBe(10);
    });

    it('renders section with id "clientes"', () => {
        expect(fixture.nativeElement.querySelector('#clientes')).toBeTruthy();
    });
});
