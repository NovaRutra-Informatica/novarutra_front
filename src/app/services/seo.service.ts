import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

const SITE_TITLE =
    'NovaRutra Informática | Manutenção de Computadores em São Paulo';
const SITE_DESCRIPTION =
    'Manutenção de computadores e servidores em São Paulo. Atendimento presencial na sua casa ou empresa e suporte remoto. Diagnóstico rápido, orçamento transparente e garantia.';
const SITE_URL = 'https://novarutra.com.br/';
const SITE_IMAGE = 'https://novarutra.com.br/BannerNovaRutra.png';
const SITE_IMAGE_ALT =
    'NovaRutra Informática — Manutenção de Computadores em São Paulo';

@Injectable({ providedIn: 'root' })
export class SeoService {
    private readonly meta = inject(Meta);
    private readonly title = inject(Title);

    init(): void {
        this.title.setTitle(SITE_TITLE);

        const tags: Parameters<Meta['updateTag']>[0][] = [
            { name: 'description', content: SITE_DESCRIPTION },
            {
                name: 'author',
                content: 'Alessandro Lima — NovaRutra Informática',
            },
            { name: 'robots', content: 'index, follow' },
            { name: 'theme-color', content: '#007bff' },

            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: SITE_URL },
            { property: 'og:title', content: SITE_TITLE },
            { property: 'og:description', content: SITE_DESCRIPTION },
            { property: 'og:image', content: SITE_IMAGE },
            { property: 'og:image:alt', content: SITE_IMAGE_ALT },
            { property: 'og:locale', content: 'pt_BR' },
            { property: 'og:site_name', content: 'NovaRutra Informática' },

            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: SITE_TITLE },
            { name: 'twitter:description', content: SITE_DESCRIPTION },
            { name: 'twitter:image', content: SITE_IMAGE },
            { name: 'twitter:image:alt', content: SITE_IMAGE_ALT },
        ];

        tags.forEach((tag) => this.meta.updateTag(tag));
    }
}
