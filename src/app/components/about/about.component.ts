import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { TerminalComponent } from '../terminal/terminal.component';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule, FadeInDirective, TerminalComponent],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
})
export class AboutComponent {
    readonly terminalText = `Sou Alessandro Lima, fundador e técnico da NovaRutra. Cada atendimento é realizado por mim — do diagnóstico até a entrega do equipamento funcionando. Sem terceirização, sem call center, sem demora.\n\nAtendo empresas e pessoas físicas com foco em manutenção de computadores e servidores. Meu objetivo é simples: resolver o seu problema com rapidez, honestidade e garantia no serviço.`;

    differentials = [
        {
            icon: 'fas fa-user-check',
            text: 'Atendimento direto com o técnico responsável pelo serviço',
        },
        {
            icon: 'fas fa-map-marker-alt',
            text: 'Atendimento presencial em São Paulo',
        },
        {
            icon: 'fas fa-award',
            text: 'Garantia em todos os serviços executados',
        },
        {
            icon: 'fas fa-bolt',
            text: 'Diagnóstico ágil e orçamento transparente',
        },
    ];

    techs = ['Windows', 'Linux', 'Dell', 'HP', 'Lenovo', 'Apple', 'Cisco'];
}
