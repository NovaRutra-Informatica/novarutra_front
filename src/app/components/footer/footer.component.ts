import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
    currentYear = new Date().getFullYear();

    socialLinks = [
        {
            icon: 'fab fa-instagram',
            url: 'https://instagram.com/ale_lima_filho',
            label: 'Instagram',
        },
        {
            icon: 'fab fa-linkedin',
            url: 'https://br.linkedin.com/in/alelimafilho',
            label: 'LinkedIn',
        },
        {
            icon: 'fab fa-whatsapp',
            url: 'https://wa.me/5511955501739',
            label: 'WhatsApp',
        },
    ];

    quickLinks = [
        { name: 'Início', href: '#inicio' },
        { name: 'Sobre', href: '#sobre' },
        { name: 'Serviços', href: '#servicos' },
        { name: 'Clientes', href: '#clientes' },
        { name: 'Contato', href: '#contato' },
    ];
}
