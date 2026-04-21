import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { ServicesComponent } from './services.component';

describe('ServicesComponent', () => {
    let component: ServicesComponent;
    let fixture: ComponentFixture<ServicesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ServicesComponent],
            providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
        }).compileComponents();

        fixture = TestBed.createComponent(ServicesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('services grid has 5 items (featured card is separate)', () => {
        expect(component.services.length).toBe(5);
    });

    it('every service has title, desc, and icon', () => {
        for (const svc of component.services) {
            expect(svc.title).toBeTruthy();
            expect(svc.desc).toBeTruthy();
            expect(svc.icon).toMatch(/^fas fa-/);
        }
    });

    it('services include Servidores', () => {
        expect(component.services.some((s) => s.title === 'Servidores')).toBe(
            true,
        );
    });

    it('services include Redes e Infraestrutura', () => {
        expect(component.services.some((s) => s.title.includes('Redes'))).toBe(
            true,
        );
    });

    it('renders section with id "servicos"', () => {
        expect(fixture.nativeElement.querySelector('#servicos')).toBeTruthy();
    });

    it('renders the featured service article', () => {
        expect(
            fixture.nativeElement.querySelector('article.service-featured'),
        ).toBeTruthy();
    });

    it('featured card shows number "01"', () => {
        const featNum = fixture.nativeElement.querySelector(
            '.feat-num',
        ) as HTMLElement;
        expect(featNum.textContent?.trim()).toBe('01');
    });

    it('renders the services grid list', () => {
        expect(
            fixture.nativeElement.querySelector('ul.services-grid'),
        ).toBeTruthy();
    });

    it('grid renders 5 service cards', () => {
        const cards = fixture.nativeElement.querySelectorAll('.service-card');
        expect(cards.length).toBe(5);
    });

    it('grid cards are numbered starting from 02', () => {
        const nums = fixture.nativeElement.querySelectorAll('.card-num');
        expect(nums[0].textContent?.trim()).toBe('02');
        expect(nums[4].textContent?.trim()).toBe('06');
    });
});
