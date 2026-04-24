import { Component } from '@angular/core';

@Component({
    selector: 'app-partners',
    standalone: true,
    templateUrl: './partners.component.html',
    styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent {
    private readonly uniquePartners = [
        { name: 'Missão Paz', logo: 'assets/clients/missao_paz.webp' },
        { name: 'CAMI', logo: 'assets/clients/cami.webp' },
        { name: 'Colégio Jubileu', logo: 'assets/clients/jubileu.webp' },
        { name: 'SteelFix', logo: 'assets/clients/steelfix.webp' },
        { name: 'SPM', logo: 'assets/clients/spm.webp' },
    ];

    // Duplicated for seamless infinite-scroll CSS animation.
    // The duplicates are marked aria-hidden in the template.
    readonly partners = [...this.uniquePartners, ...this.uniquePartners];
    readonly uniqueCount = this.uniquePartners.length;
}
