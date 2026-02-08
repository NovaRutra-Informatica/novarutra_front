import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { FadeInDirective } from './directives/fade-in.directive';
import { PartnersComponent } from './components/partners/partners.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappBtnComponent } from './components/whatsapp-btn/whatsapp-btn.component';
import { StatsComponent } from './components/stats/stats.component';
import { ProcessComponent } from './components/process/process.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        NavbarComponent,
        HeroComponent,
        PartnersComponent,
        FooterComponent,
        WhatsappBtnComponent,
        StatsComponent,
        ProcessComponent,
        ContactComponent,
        FadeInDirective,
    ],
    templateUrl: './app.html',
    styleUrl: './app.scss',
})
export class AppComponent {
    services = [
        {
            title: 'Desenv. Web & Apps',
            desc: 'Criação de sites modernos, sistemas web e aplicativos móveis sob medida para seu negócio.',
            icon: 'fas fa-laptop-code',
        },
        {
            title: 'Suporte de T.I.',
            desc: 'Suporte técnico ágil para resolver problemas do dia a dia e manter sua equipe produtiva.',
            icon: 'fas fa-headset',
        },
        {
            title: 'Infraestrutura & Redes',
            desc: 'Projeto, cabeamento estruturado e configuração de redes Wi-Fi de alta performance.',
            icon: 'fas fa-network-wired',
        },
        {
            title: 'Segurança & Cloud',
            desc: 'Proteção de dados, backup em nuvem e blindagem contra ameaças virtuais.',
            icon: 'fas fa-shield-alt',
        },
    ];
}
