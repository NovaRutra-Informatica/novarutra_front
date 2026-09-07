import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CountUpDirective } from '../../directives/count-up.directive';

@Component({
    selector: 'app-stats',
    standalone: true,
    imports: [CountUpDirective],
    templateUrl: './stats.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
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
