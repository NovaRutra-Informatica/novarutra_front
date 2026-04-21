import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
    let component: ContactComponent;
    let fixture: ComponentFixture<ContactComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ContactComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ContactComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        await fixture.whenStable();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('formData starts empty', () => {
        expect(component.formData.name).toBe('');
        expect(component.formData.email).toBe('');
        expect(component.formData.company).toBe('');
        expect(component.formData.message).toBe('');
    });

    it('isSending starts as false', () => {
        expect(component.isSending).toBe(false);
    });

    it('isSent starts as false', () => {
        expect(component.isSent).toBe(false);
    });

    it('sendMessage sets isSending to true immediately', () => {
        vi.useFakeTimers();
        component.sendMessage();
        expect(component.isSending).toBe(true);
        vi.clearAllTimers();
    });

    it('sendMessage sets isSent to true after 2 seconds', () => {
        vi.useFakeTimers();
        component.sendMessage();
        expect(component.isSent).toBe(false);
        vi.advanceTimersByTime(2000);
        expect(component.isSent).toBe(true);
        expect(component.isSending).toBe(false);
    });

    it('sendMessage resets formData after 2 seconds', () => {
        vi.useFakeTimers();
        component.formData = {
            name: 'Alessandro',
            email: 'a@test.com',
            company: 'NovaRutra',
            message: 'Olá',
        };
        component.sendMessage();
        vi.advanceTimersByTime(2000);
        expect(component.formData.name).toBe('');
        expect(component.formData.email).toBe('');
        expect(component.formData.message).toBe('');
    });

    it('renders contact form when isSent is false', () => {
        expect(
            fixture.nativeElement.querySelector('form.contact-form'),
        ).toBeTruthy();
    });

    it('renders success message when isSent is true', async () => {
        component.isSent = true;
        fixture.detectChanges();
        await fixture.whenStable();
        expect(
            fixture.nativeElement.querySelector('.success-message'),
        ).toBeTruthy();
        expect(
            fixture.nativeElement.querySelector('form.contact-form'),
        ).toBeNull();
    });

    it('renders WhatsApp contact link', () => {
        expect(
            fixture.nativeElement.querySelector('a[href*="wa.me"]'),
        ).toBeTruthy();
    });

    it('renders email contact link', () => {
        expect(
            fixture.nativeElement.querySelector('a[href^="mailto:"]'),
        ).toBeTruthy();
    });

    it('submit button is disabled while isSending', async () => {
        component.isSending = true;
        fixture.detectChanges();
        await fixture.whenStable();
        const btn = fixture.nativeElement.querySelector(
            'button[type="submit"]',
        ) as HTMLButtonElement;
        expect(btn.disabled).toBe(true);
    });
});
