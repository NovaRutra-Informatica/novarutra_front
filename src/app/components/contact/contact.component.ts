import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
    formData = { name: '', email: '', company: '', message: '' };
    isSending = false;
    isSent = false;

    sendMessage() {
        this.isSending = true;

        // TODO: Integrar com serviço de e-mail
        setTimeout(() => {
            this.isSending = false;
            this.isSent = true;
            this.formData = { name: '', email: '', company: '', message: '' };
        }, 2000);
    }
}
