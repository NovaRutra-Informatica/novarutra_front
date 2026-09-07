import { Injectable } from '@angular/core';
import { EMAILJS_CONFIG } from '../config/emailjs.config';

export interface ContactPayload {
    name: string;
    email: string;
    company: string;
    message: string;
}

@Injectable({ providedIn: 'root' })
export class EmailService {
    async send(payload: ContactPayload): Promise<void> {
        // NOTE: Lazy import avoids browser globals during prerender and keeps the SDK out of the initial bundle.
        const emailjs = (await import('@emailjs/browser')).default;

        await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templateId,
            {
                from_name: payload.name,
                from_email: payload.email,
                company: payload.company.trim() || 'Não informado',
                message: payload.message,
            },
            { publicKey: EMAILJS_CONFIG.publicKey },
        );
    }
}
