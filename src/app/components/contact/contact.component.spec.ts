import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { ContactComponent } from './contact.component';
import { EmailService } from '../../services/email.service';

const VALID_FORM = {
    name: 'Alessandro',
    email: 'a@test.com',
    company: 'NovaRutra',
    message: 'Olá',
};

describe('ContactComponent', () => {
    let component: ContactComponent;
    let fixture: ComponentFixture<ContactComponent>;
    let send: ReturnType<typeof vi.fn>;

    beforeEach(async () => {
        send = vi.fn().mockResolvedValue(undefined);

        await TestBed.configureTestingModule({
            imports: [ContactComponent],
            providers: [{ provide: EmailService, useValue: { send } }],
        }).compileComponents();

        fixture = TestBed.createComponent(ContactComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('starts with an empty form and idle state', () => {
        expect(component.formData).toEqual({
            name: '',
            email: '',
            company: '',
            message: '',
        });
        expect(component.isSending()).toBe(false);
        expect(component.isSent()).toBe(false);
        expect(component.errorMessage()).toBe('');
    });

    // ── Validation ───────────────────────────────────────────────────────────

    it('rejects an empty form without calling the email service', async () => {
        await component.sendMessage();

        expect(send).not.toHaveBeenCalled();
        expect(component.errorMessage()).toBe('Informe seu nome.');
        expect(component.isSent()).toBe(false);
    });

    it('rejects a malformed e-mail', async () => {
        component.formData = { ...VALID_FORM, email: 'nao-e-um-email' };

        await component.sendMessage();

        expect(send).not.toHaveBeenCalled();
        expect(component.errorMessage()).toBe('Informe um e-mail válido.');
    });

    it('rejects a whitespace-only message', async () => {
        component.formData = { ...VALID_FORM, message: '   ' };

        await component.sendMessage();

        expect(send).not.toHaveBeenCalled();
        expect(component.errorMessage()).toBe('Escreva sua mensagem.');
    });

    it('treats company as optional', async () => {
        component.formData = { ...VALID_FORM, company: '' };

        await component.sendMessage();

        expect(send).toHaveBeenCalledOnce();
        expect(component.isSent()).toBe(true);
    });

    // ── Sending ──────────────────────────────────────────────────────────────

    it('forwards the form to the email service and resets on success', async () => {
        component.formData = { ...VALID_FORM };

        await component.sendMessage();

        expect(send).toHaveBeenCalledWith(VALID_FORM);
        expect(component.isSent()).toBe(true);
        expect(component.isSending()).toBe(false);
        expect(component.formData).toEqual({
            name: '',
            email: '',
            company: '',
            message: '',
        });
    });

    it('flags isSending while the request is in flight', async () => {
        let release: () => void;
        send.mockReturnValue(
            new Promise<void>((resolve) => {
                release = resolve;
            }),
        );
        component.formData = { ...VALID_FORM };

        const pending = component.sendMessage();
        expect(component.isSending()).toBe(true);

        release!();
        await pending;
        expect(component.isSending()).toBe(false);
    });

    it('ignores a second submit while one is already in flight', async () => {
        send.mockReturnValue(new Promise<void>(() => {}));
        component.formData = { ...VALID_FORM };

        void component.sendMessage();
        void component.sendMessage();

        expect(send).toHaveBeenCalledOnce();
    });

    // ── Failure ──────────────────────────────────────────────────────────────

    it('surfaces an error and keeps the form filled when sending fails', async () => {
        send.mockRejectedValue(new Error('network down'));
        component.formData = { ...VALID_FORM };

        await component.sendMessage();

        expect(component.isSent()).toBe(false);
        expect(component.isSending()).toBe(false);
        expect(component.errorMessage()).toContain('Não consegui enviar');
        expect(component.formData.name).toBe('Alessandro');
    });

    it('clears a previous error on a successful retry', async () => {
        send.mockRejectedValueOnce(new Error('network down'));
        component.formData = { ...VALID_FORM };
        await component.sendMessage();
        expect(component.errorMessage()).not.toBe('');

        component.formData = { ...VALID_FORM };
        await component.sendMessage();

        expect(component.errorMessage()).toBe('');
        expect(component.isSent()).toBe(true);
    });

    // ── Template ─────────────────────────────────────────────────────────────

    it('renders the contact form before submission', () => {
        expect(
            fixture.nativeElement.querySelector('form.contact-form'),
        ).toBeTruthy();
    });

    it('swaps the form for the success message once sent', async () => {
        component.isSent.set(true);
        fixture.detectChanges();
        await fixture.whenStable();

        expect(
            fixture.nativeElement.querySelector('.success-message'),
        ).toBeTruthy();
        expect(
            fixture.nativeElement.querySelector('form.contact-form'),
        ).toBeNull();
    });

    it('renders the error message when one is set', async () => {
        component.errorMessage.set('Informe seu nome.');
        fixture.detectChanges();
        await fixture.whenStable();

        const error = fixture.nativeElement.querySelector('.form-error');
        expect(error).toBeTruthy();
        expect(error.textContent).toContain('Informe seu nome.');
    });

    it('disables the submit button while sending', async () => {
        component.isSending.set(true);
        fixture.detectChanges();
        await fixture.whenStable();

        const btn = fixture.nativeElement.querySelector(
            'button[type="submit"]',
        ) as HTMLButtonElement;
        expect(btn.disabled).toBe(true);
    });

    it('renders WhatsApp and e-mail fallback channels', () => {
        expect(
            fixture.nativeElement.querySelector('a[href*="wa.me"]'),
        ).toBeTruthy();
        expect(
            fixture.nativeElement.querySelector('a[href^="mailto:"]'),
        ).toBeTruthy();
    });
});
