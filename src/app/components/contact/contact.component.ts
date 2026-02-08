import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
    formData = {
        name: '',
        email: '',
        company: '',
        message: '',
    };

    isSending = false;

    sendMessage() {
        this.isSending = true;

        // TODO: Integrar com serviço de e-mail
        setTimeout(() => {
            this.isSending = false;
            alert(
                'Mensagem enviada com sucesso! Entraremos em contato em breve.',
            );
            this.formData = { name: '', email: '', company: '', message: '' };
        }, 2000);
    }
}
