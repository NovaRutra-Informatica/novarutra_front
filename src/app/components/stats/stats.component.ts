import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUpDirective } from '../../directives/count-up.directive';

@Component({
    selector: 'app-stats',
    standalone: true,
    imports: [CommonModule, CountUpDirective],
    templateUrl: './stats.component.html',
    styleUrl: './stats.component.scss',
})
export class StatsComponent {
    stats = [
        { label: 'Projetos Entregues', value: 50, suffix: '+' },
        { label: 'Anos de Mercado', value: 2, suffix: '+' },
        { label: 'Satisfação', value: 100, suffix: '%' },
        { label: 'Suporte', value: 24, suffix: '/7' },
    ];
}
