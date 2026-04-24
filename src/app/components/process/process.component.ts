import { Component } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
    selector: 'app-process',
    standalone: true,
    imports: [FadeInDirective],
    templateUrl: './process.component.html',
    styleUrls: ['./process.component.scss'],
})
export class ProcessComponent {
    steps = [
        {
            number: '01',
            title: 'Diagnóstico',
            desc: 'Análise completa do equipamento para identificar o problema com precisão e transparência.',
            icon: 'fas fa-stethoscope',
        },
        {
            number: '02',
            title: 'Orçamento',
            desc: 'Receba o valor detalhado antes de qualquer serviço. Sem surpresas, sem letras miúdas.',
            icon: 'fas fa-file-invoice',
        },
        {
            number: '03',
            title: 'Reparo',
            desc: 'Execução com peças de qualidade, técnica especializada e prazo acordado.',
            icon: 'fas fa-tools',
        },
        {
            number: '04',
            title: 'Garantia',
            desc: 'Entrega com garantia de serviço. Problema voltou? Retorno sem custo adicional.',
            icon: 'fas fa-award',
        },
    ];
}
