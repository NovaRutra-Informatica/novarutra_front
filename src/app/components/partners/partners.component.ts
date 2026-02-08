import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-partners',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './partners.component.html',
    styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent {
    partners = [
        { name: 'Missão Paz', logo: 'assets/clients/missao_paz.jpg' },
        { name: 'CAMI', logo: 'assets/clients/cami.png' },
        { name: 'Colégio Jubileu', logo: 'assets/clients/jubileu.png' },
        { name: 'SteelFix', logo: 'assets/clients/steelfix.jpg' },
        { name: 'SPM', logo: 'assets/clients/spm.png' },
        { name: 'Missão Paz', logo: 'assets/clients/missao_paz.jpg' },
        { name: 'CAMI', logo: 'assets/clients/cami.png' },
        { name: 'Colégio Jubileu', logo: 'assets/clients/jubileu.png' },
        { name: 'SteelFix', logo: 'assets/clients/steelfix.jpg' },
        { name: 'SPM', logo: 'assets/clients/spm.png' },
    ];
}
