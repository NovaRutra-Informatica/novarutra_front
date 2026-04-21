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
        { label: 'Equipamentos Reparados', value: 150, suffix: '+' },
        { label: 'Clientes Atendidos', value: 70, suffix: '+' },
        { label: 'Satisfação', value: 100, suffix: '%' },
        { label: 'Suporte', value: 24, suffix: '/7' },
    ];
}
