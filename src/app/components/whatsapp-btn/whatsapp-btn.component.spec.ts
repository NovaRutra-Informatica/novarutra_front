import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WhatsappBtnComponent } from './whatsapp-btn.component';

describe('WhatsappBtnComponent', () => {
    let component: WhatsappBtnComponent;
    let fixture: ComponentFixture<WhatsappBtnComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [WhatsappBtnComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(WhatsappBtnComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('renders a WhatsApp float link', () => {
        expect(
            fixture.nativeElement.querySelector('a.whatsapp-float'),
        ).toBeTruthy();
    });

    it('link points to the correct WhatsApp number', () => {
        const link = fixture.nativeElement.querySelector(
            'a.whatsapp-float',
        ) as HTMLAnchorElement;
        expect(link.href).toContain('wa.me');
        expect(link.href).toContain('5511955501739');
    });

    it('link opens in a new tab', () => {
        const link = fixture.nativeElement.querySelector(
            'a.whatsapp-float',
        ) as HTMLAnchorElement;
        expect(link.target).toBe('_blank');
    });

    it('link has rel="noopener noreferrer" to prevent tabnapping', () => {
        const link = fixture.nativeElement.querySelector(
            'a.whatsapp-float',
        ) as HTMLAnchorElement;
        expect(link.rel).toContain('noopener');
        expect(link.rel).toContain('noreferrer');
    });
});
