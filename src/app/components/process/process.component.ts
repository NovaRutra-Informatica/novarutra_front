import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-process',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './process.component.html',
    styleUrls: ['./process.component.scss'],
})
export class ProcessComponent {
    steps = [
        {
            number: '01',
            title: 'Diagnóstico',
            desc: 'Entendemos a fundo a necessidade e os gargalos da sua empresa.',
            icon: 'fas fa-search-dollar',
        },
        {
            number: '02',
            title: 'Estratégia',
            desc: 'Planejamos a solução ideal, seja infraestrutura, site ou app.',
            icon: 'fas fa-chess-knight',
        },
        {
            number: '03',
            title: 'Execução',
            desc: 'Nossos especialistas implementam a solução com agilidade e técnica.',
            icon: 'fas fa-code',
        },
        {
            number: '04',
            title: 'Suporte',
            desc: 'Monitoramos e damos suporte contínuo para garantir estabilidade.',
            icon: 'fas fa-sync-alt',
        },
    ];
}
