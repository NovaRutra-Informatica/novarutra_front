import { Component, inject } from '@angular/core';
import { SeoService } from './services/seo.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { PartnersComponent } from './components/partners/partners.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappBtnComponent } from './components/whatsapp-btn/whatsapp-btn.component';
import { StatsComponent } from './components/stats/stats.component';
import { ProcessComponent } from './components/process/process.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { CtaComponent } from './components/cta/cta.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        NavbarComponent,
        HeroComponent,
        PartnersComponent,
        FooterComponent,
        WhatsappBtnComponent,
        StatsComponent,
        ProcessComponent,
        ContactComponent,
        AboutComponent,
        ServicesComponent,
        WhyUsComponent,
        CtaComponent,
    ],
    templateUrl: './app.html',
    styleUrl: './app.scss',
})
export class AppComponent {
    constructor() {
        inject(SeoService).init();
    }
}
