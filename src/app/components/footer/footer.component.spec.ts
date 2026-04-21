import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FooterComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('currentYear equals the real current year', () => {
        expect(component.currentYear).toBe(new Date().getFullYear());
    });

    it('has 3 social links', () => {
        expect(component.socialLinks.length).toBe(3);
    });

    it('social links include Instagram, LinkedIn, and WhatsApp', () => {
        const labels = component.socialLinks.map((l) => l.label);
        expect(labels).toContain('Instagram');
        expect(labels).toContain('LinkedIn');
        expect(labels).toContain('WhatsApp');
    });

    it('has 5 quick links', () => {
        expect(component.quickLinks.length).toBe(5);
    });

    it('quick links cover main sections', () => {
        const hrefs = component.quickLinks.map((l) => l.href);
        expect(hrefs).toContain('#inicio');
        expect(hrefs).toContain('#servicos');
        expect(hrefs).toContain('#contato');
    });

    it('renders the current year in the DOM', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.textContent).toContain(
            String(new Date().getFullYear()),
        );
    });

    it('renders social links as anchor tags', () => {
        const links = fixture.nativeElement.querySelectorAll('.social-links a');
        expect(links.length).toBe(3);
    });
});
