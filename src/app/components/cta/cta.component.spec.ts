import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CtaComponent } from './cta.component';

describe('CtaComponent', () => {
    let fixture: ComponentFixture<CtaComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CtaComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CtaComponent);
        fixture.detectChanges();
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(fixture.componentInstance).toBeTruthy();
    });

    it('renders the CTA heading', () => {
        const h2 = fixture.nativeElement.querySelector('h2') as HTMLElement;
        expect(h2.textContent).toBeTruthy();
    });

    it('renders a link to the contact section', () => {
        const link = fixture.nativeElement.querySelector('a[href="#contato"]');
        expect(link).toBeTruthy();
    });

    it('renders a WhatsApp button', () => {
        const link = fixture.nativeElement.querySelector(
            'a.btn-whatsapp',
        ) as HTMLAnchorElement;
        expect(link).toBeTruthy();
        expect(link.href).toContain('wa.me');
    });

    it('WhatsApp button has rel="noopener noreferrer"', () => {
        const link = fixture.nativeElement.querySelector(
            'a.btn-whatsapp',
        ) as HTMLAnchorElement;
        expect(link.rel).toContain('noopener');
    });
});
