import {
    Component,
    inject,
    signal,
    ChangeDetectionStrategy,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../services/email.service';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './contact.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
    private readonly email = inject(EmailService);

    formData = { name: '', email: '', company: '', message: '' };

    // NOTE: async form state must remain signal-driven because the app is zoneless.
    readonly isSending = signal(false);
    readonly isSent = signal(false);
    readonly errorMessage = signal('');

    async sendMessage(): Promise<void> {
        if (this.isSending()) return;

        const error = this.validate();
        if (error) {
            this.errorMessage.set(error);
            return;
        }

        this.isSending.set(true);
        this.errorMessage.set('');

        try {
            await this.email.send(this.formData);
            this.formData = { name: '', email: '', company: '', message: '' };
            this.isSent.set(true);
        } catch {
            this.errorMessage.set(
                'Não consegui enviar sua mensagem agora. Tente novamente em instantes ou fale comigo pelo WhatsApp.',
            );
        } finally {
            this.isSending.set(false);
        }
    }

    private validate(): string {
        const { name, email, message } = this.formData;

        if (!name.trim()) return 'Informe seu nome.';
        if (!email.trim()) return 'Informe seu e-mail.';
        if (!EMAIL_PATTERN.test(email.trim()))
            return 'Informe um e-mail válido.';
        if (!message.trim()) return 'Escreva sua mensagem.';

        return '';
    }
}
