import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [FadeInDirective],
    templateUrl: './services.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './services.component.scss',
})
export class ServicesComponent {
    readonly services = [
        {
            title: 'Servidores',
            desc: 'Instalação, configuração e manutenção de servidores físicos e virtualizados.',
            icon: 'fas fa-server',
        },
        {
            title: 'Redes e Infraestrutura',
            desc: 'Cabeamento estruturado, roteadores, switches e redes Wi-Fi corporativas.',
            icon: 'fas fa-network-wired',
        },
        {
            title: 'Suporte Técnico',
            desc: 'Atendimento presencial e remoto para resolver problemas do dia a dia com rapidez.',
            icon: 'fas fa-headset',
        },
        {
            title: 'Recuperação de Dados',
            desc: 'Recuperação de arquivos em HDs, SSDs e pendrives com segurança e sigilo total.',
            icon: 'fas fa-database',
        },
        {
            title: 'Segurança e Backup',
            desc: 'Antivírus, firewall e backup automático para proteger o seu negócio.',
            icon: 'fas fa-shield-alt',
        },
    ];
}
