import { Component } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
    selector: 'app-why-us',
    standalone: true,
    imports: [FadeInDirective],
    templateUrl: './why-us.component.html',
    styleUrl: './why-us.component.scss',
})
export class WhyUsComponent {
    items = [
        {
            icon: 'fas fa-user-check',
            title: 'Direto com o técnico',
            desc: 'Sem call center. Você fala com quem vai resolver o seu problema, do início ao fim.',
        },
        {
            icon: 'fas fa-file-invoice',
            title: 'Orçamento transparente',
            desc: 'Receba o valor antes de qualquer serviço, sem surpresas e sem letras miúdas.',
        },
        {
            icon: 'fas fa-award',
            title: 'Garantia no serviço',
            desc: 'Todo reparo tem garantia. Problema voltou? Retorno sem custo adicional.',
        },
        {
            icon: 'fas fa-clock',
            title: 'Prazo cumprido',
            desc: 'Diagnóstico rápido e prazo de entrega que realmente é respeitado.',
        },
    ];
}
